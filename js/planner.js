// ====== SELECTORS ======
// Select all attraction buttons
const attractions = document.querySelectorAll(".attraction");

// Select the "Build my adventure plan" button
const generateBtn = document.getElementById("generate");

// Select the output container where day cards will be shown
const output = document.getElementById("output");


// ====== TOGGLE SELECTION ======
// Function to add click behaviour to attraction buttons
function attachToggle(button) {
    button.addEventListener("click", () => {
        // Toggle the "selected" class on click
        // If selected > deselect
        // If not selected > select
        button.classList.toggle("selected");
    });
}

// Attach toggle behavior to all default attraction buttons
attractions.forEach(btn => attachToggle(btn));


// ====== CUSTOM INPUT HANDLING ======
// Handle custom attractions typed by the user
document.querySelectorAll(".custom-input").forEach(input => {
    input.addEventListener("keypress", e => {

        // Only trigger when Enter key is pressed
        if (e.key === "Enter") {
            const value = input.value.trim();

            // Stop if input is empty
            if (!value) return;

            // Find the group this input belongs to City / Cultural / Nature
            const group = input.closest(".group");
            const area = group.dataset.area;

            // Create a new attraction button
            const newBtn = document.createElement("button");
            newBtn.className = "attraction selected"; // auto-select new attraction
            newBtn.dataset.area = area;
            newBtn.textContent = value;

            // Enable toggle behavior on the new button
            attachToggle(newBtn);

            // Insert the new button before the input field
            group.insertBefore(newBtn, input);

            // Clear input field after adding
            input.value = "";
        }
    });
});


// ====== GENERATE ITINERARY ======
generateBtn.addEventListener("click", () => {

    // Clear previous output
    output.innerHTML = "";

    // Read number of days from input
    let days = parseInt(document.getElementById("days").value);

    // Read max attractions per day
    const maxPerDayInput = document.getElementById("perDay");
    const maxPerDay = parseInt(maxPerDayInput?.value) || 0;

    // ----- VALIDATION -----

    // Check if days input is valid
    if (!days || days < 1) {
        output.innerHTML = "<p style='color:red'>Please enter a valid number of days.</p>";
        return;
    }

    // Limit maximum days to 10
    if (days > 10) {
        output.innerHTML = "<p style='color:red'>⚠️ Maximum allowed days is 10.</p>";
        return;
    }

    // Get all selected attractions
    const selected = [...document.querySelectorAll(".attraction.selected")];

    // Ensure at least one attraction is selected
    if (selected.length === 0) {
        output.innerHTML = "<p style='color:red'>Please select at least one attraction.</p>";
        return;
    }

    // ----- GROUP & FLATTEN ATTRACTIONS -----

    // Group attractions by area City / Cultural / Nature
    const grouped = {};
    selected.forEach(btn => {
        const area = btn.dataset.area;
        if (!grouped[area]) grouped[area] = [];
        grouped[area].push(btn.textContent);
    });

    // Convert grouped object into one flat list
    const allAttractions = Object.values(grouped).flat();

    // ----- SLOT CALCULATION & WARNING -----

    // Calculate total available slots
    // If maxPerDay is set → days * maxPerDay
    // Otherwise → allow all attractions
    const totalSlots = maxPerDay > 0 ? days * maxPerDay : selected.length;

    // Warn user if some attractions cannot fit
    if (selected.length > totalSlots) {
        const remaining = selected.length - totalSlots;
        const warn = document.createElement("p");
        warn.style.color = "red";
        warn.textContent = 
            `⚠️ Not enough days to fit all selected attractions with ${maxPerDay} per day. 
             ${remaining} attraction(s) won't fit.`;

        // Show warning at the top of output
        output.prepend(warn);
    }

    // ----- GENERATE DAY CARDS -----

    let day = 1;     // Current day number
    let index = 0;   // Tracks which attraction to use next

    // Loop through each day (max 10)
    while (day <= days && day <= 10) {

        // Create a day card
        const div = document.createElement("div");
        div.className = "day";

        // Select attractions for the current day
        const dayAttractions = allAttractions.slice(
            index,
            index + (maxPerDay || allAttractions.length)
        );

        // Move index forward
        index += dayAttractions.length;

        // If attractions exist for this day
        if (dayAttractions.length > 0) {
            div.innerHTML = `
                <h3>Day ${day}</h3>
                <ul>
                    ${dayAttractions.map(a => `<li>${a}</li>`).join("")}
                </ul>
            `;
        } 
        // If no attractions left → free day
        else {
            div.innerHTML = `
                <h3>Day ${day} - Free Day</h3>
                <ul>
                    <li>Explore Singapore at your own pace! 🌴</li>
                </ul>
            `;
        }

        // Add day card to output
        output.appendChild(div);

        // Move to next day
        day++;
    }
});

