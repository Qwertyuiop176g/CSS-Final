const attractions = document.querySelectorAll(".attraction");
const generateBtn = document.getElementById("generate");
const output = document.getElementById("output");

// Toggle selection
function attachToggle(button) {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
}

// Attach toggle to existing buttons
attractions.forEach(btn => attachToggle(btn));

// Handle custom inputs per section
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

            // Insert before the input field
            group.insertBefore(newBtn, input);

            input.value = "";
        }
    });
});

// Generate itinerary
generateBtn.addEventListener("click", () => {
    const days = parseInt(document.getElementById("days").value);
    const selected = [...document.querySelectorAll(".attraction.selected")];

    if (!days || selected.length === 0) {
        output.innerHTML = "<p>Please select days and attractions.</p>";
        return;
    }

    const grouped = {};
    selected.forEach(btn => {
        const area = btn.dataset.area;
        if (!grouped[area]) grouped[area] = [];
        grouped[area].push(btn.textContent);
    });

    output.innerHTML = "";
    let day = 1;

    for (const area in grouped) {
        if (day > days) break;

        const div = document.createElement("div");
        div.className = "day";

        div.innerHTML = `
            <h3>Day ${day} – ${area}</h3>
            <ul>
                ${grouped[area].map(a => `<li>${a}</li>`).join("")}
            </ul>
        `;

        output.appendChild(div);
        day++;
    }
});

        userPlanDiv.appendChild(dayCard);
    }
});
