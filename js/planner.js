// ====== SELECTORS ======
const attractions = document.querySelectorAll(".attraction");
const generateBtn = document.getElementById("generate");
const output = document.getElementById("output");

// ====== TOGGLE SELECTION ======
function attachToggle(button) {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
}

attractions.forEach(btn => attachToggle(btn));

// ====== CUSTOM INPUT HANDLING ======
document.querySelectorAll(".custom-input").forEach(input => {
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            const value = input.value.trim();
            if (!value) return;

            const group = input.closest(".group");
            const area = group.dataset.area;

            const newBtn = document.createElement("button");
            newBtn.className = "attraction selected";
            newBtn.dataset.area = area;
            newBtn.textContent = value;

            attachToggle(newBtn);
            group.insertBefore(newBtn, input);

            input.value = "";
        }
    });
});

// ====== GENERATE ITINERARY ======
generateBtn.addEventListener("click", () => {
    output.innerHTML = "";

    let days = parseInt(document.getElementById("days").value);
    const maxPerDayInput = document.getElementById("perDay");
    const maxPerDay = parseInt(maxPerDayInput?.value) || 0;

    // Validate days
    if (!days || days < 1) {
        output.innerHTML = "<p style='color:red'>Please enter a valid number of days.</p>";
        return;
    }
    if (days > 60) {
        output.innerHTML = "<p style='color:red'>⚠️ Maximum allowed days is 60.</p>";
        return;
    }

    const selected = [...document.querySelectorAll(".attraction.selected")];
    if (selected.length === 0) {
        output.innerHTML = "<p style='color:red'>Please select at least one attraction.</p>";
        return;
    }

    // Flatten attractions
    const grouped = {};
    selected.forEach(btn => {
        const area = btn.dataset.area;
        if (!grouped[area]) grouped[area] = [];
        grouped[area].push(btn.textContent);
    });
    const allAttractions = Object.values(grouped).flat();

    // Warn if not enough days
    const totalSlots = maxPerDay > 0 ? days * maxPerDay : selected.length;
    if (selected.length > totalSlots) {
        const remaining = selected.length - totalSlots;
        const warn = document.createElement("p");
        warn.style.color = "red";
        warn.textContent = `⚠️ Not enough days to fit all selected attractions with ${maxPerDay} per day. ${remaining} attraction(s) won't fit.`;
        output.prepend(warn);
    }

    // Generate day cards
    let day = 1;
    let index = 0;

    while (day <= days && day <= 10) {
        const div = document.createElement("div");
        div.className = "day";

        const dayAttractions = allAttractions.slice(index, index + (maxPerDay || allAttractions.length));
        index += dayAttractions.length;

        // Check if attractions exist for this day
        if (dayAttractions.length > 0) {
            div.innerHTML = `
                <h3>Day ${day}</h3>
                <ul>
                    ${dayAttractions.map(a => `<li>${a}</li>`).join("")}
                </ul>
            `;
        } else {
            // Free Day
            div.innerHTML = `
                <h3>Day ${day} - Free Day</h3>
                <ul><li>Explore Singapore at your own pace!🌴</li></ul>
            `;
        }

        output.appendChild(div);
        day++;
    }
});


