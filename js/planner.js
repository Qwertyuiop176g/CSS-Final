/* ================== VARIABLES ================== */
const attractions = document.querySelectorAll(".attraction");
const generateBtn = document.getElementById("generate");
const output = document.getElementById("output");
const daysInput = document.getElementById("days");
const perDayInput = document.getElementById("perDay"); // user-controlled daily max

/* ================== TOGGLE SELECTION ================== */
function attachToggle(button) {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
}

// Attach toggle to all existing buttons
attractions.forEach(btn => attachToggle(btn));

/* ================== CUSTOM INPUT HANDLING ================== */
document.querySelectorAll(".custom-input").forEach(input => {
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            const value = input.value.trim();
            if (!value || value.length < 3) return; // simple validation

            const group = input.closest(".group");
            const area = group.dataset.area;

            const newBtn = document.createElement("button");
            newBtn.className = "attraction selected";
            newBtn.dataset.area = area;
            newBtn.textContent = value.charAt(0).toUpperCase() + value.slice(1);

            attachToggle(newBtn);

            // Insert the new button before the input
            group.insertBefore(newBtn, input);

            input.value = "";
        }
    });
});

/* ================== ITINERARY GENERATION ================== */
generateBtn.addEventListener("click", () => {
    const days = parseInt(daysInput.value);
    const maxPerDay = parseInt(perDayInput.value) || 4;
    const selected = [...document.querySelectorAll(".attraction.selected")];

    // Validation: at least one attraction and days > 0
    if (!days || selected.length === 0) {
        output.innerHTML = `
            <p style="color:#b30047; font-weight:600;">
                Please select the number of days and at least one attraction.
            </p>
        `;
        return;
    }

    // Check if enough days to fit all attractions
    const requiredDays = Math.ceil(selected.length / maxPerDay);
    if (requiredDays > days) {
        output.innerHTML = `
            <p style="color:#b30047; font-weight:600;">
                You have selected ${selected.length} attractions but only ${days} day(s) 
                with a maximum of ${maxPerDay} per day. <br>
                You need at least ${requiredDays} day(s) to fit them all.
            </p>
        `;
        return; // stop generation
    }

    // Shuffle attractions for variety
    const shuffled = selected
        .map(btn => btn.textContent)
        .sort(() => Math.random() - 0.5);

    // Initialize empty plan array
    const plan = Array.from({ length: days }, () => []);

    // Distribute attractions across days respecting user max
    shuffled.forEach(attraction => {
        const targetDay = plan.find(day => day.length < maxPerDay);
        if (targetDay) targetDay.push(attraction);
    });

    // Clear previous output
    output.innerHTML = "";

    // Build day cards
    plan.forEach((items, index) => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";

        if (items.length === 0) {
            dayDiv.innerHTML = `
                <h3>Day ${index + 1}</h3>
                <p>Free day – explore nearby areas or relax 🌴</p>
            `;
        } else {
            dayDiv.innerHTML = `
                <h3>Day ${index + 1}</h3>
                <ul>
                    ${items.map(a => `<li>${a}</li>`).join("")}
                </ul>
            `;
        }

        output.appendChild(dayDiv);
    });

    // Scroll to results smoothly
    output.scrollIntoView({ behavior: "smooth" });
});

