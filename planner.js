// Button selection
const attractionButtons = document.querySelectorAll(".attraction-btn");
attractionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
    });
});

// Generate plan
const generateBtn = document.getElementById("generate-plan");
const userPlanDiv = document.getElementById("user-plan");

generateBtn.addEventListener("click", () => {
    const numDays = parseInt(document.getElementById("num-days").value);
    const selectedAttractions = Array.from(document.querySelectorAll(".attraction-btn.selected")).map(btn => btn.textContent);

    if (!numDays || selectedAttractions.length === 0) {
        userPlanDiv.innerHTML = "<p style='color:red;'>Please select days and at least one attraction!</p>";
        return;
    }

    userPlanDiv.innerHTML = ""; // Clear previous plan

    // Distribute attractions evenly
    for (let day = 1; day <= numDays; day++) {
        const dayAttractions = selectedAttractions.filter((_, i) => i % numDays === (day - 1));

        const dayCard = document.createElement("div");
        dayCard.classList.add("day-card");

        const dayHeader = document.createElement("h3");
        dayHeader.textContent = `Day ${day}`;
        dayCard.appendChild(dayHeader);

        if (dayAttractions.length > 0) {
            const ul = document.createElement("ul");
            dayAttractions.forEach(attraction => {
                const li = document.createElement("li");
                li.textContent = attraction;
                ul.appendChild(li);
            });
            dayCard.appendChild(ul);
        } else {
            const p = document.createElement("p");
            p.textContent = "No attractions planned.";
            dayCard.appendChild(p);
        }

        userPlanDiv.appendChild(dayCard);
    }
});
