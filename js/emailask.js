 const modal = document.getElementById("emailModal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const messageDiv = document.getElementById("message");

  window.onload = () => {
    modal.style.display = "flex";
  };

  closeBtn.onclick = () => modal.style.display = "none";


  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };


 function isValidEmail(value) {
    return value.includes("@") && value.includes(".");
  }

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  const email = emailInput.value.trim();

  if (!email) {
    messageDiv.textContent = "You didn't enter an email.";
    messageDiv.className = "message error";
  } else if (!isValidEmail(email)) {
    messageDiv.textContent = "Please enter a valid email address.";
    messageDiv.className = "message error";
  } else {
    messageDiv.textContent = "Thank you! We got your email: " + email;
    messageDiv.className = "message success";
    emailInput.value = "";
    setTimeout(() => modal.style.display = "none", 1500); 
  }
});
