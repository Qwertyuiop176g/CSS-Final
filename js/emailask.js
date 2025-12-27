function askEmail() {
  const email = prompt("Please enter your email:");
  if (email) {
    alert("Thank you! We got your email: " + email);
  } 
  else if (Isitthere(email)) {
    alert("You didn't enter an email.");
  }
  else {
    alert("You didn't enter an email.");
  }
}

function Isitthere(value){

    for (let index = 0; index < value.length; index++) {
        const element = value[index];
        console.log(element)
        if (element == "@"){
            return false
        }
    }
    return true
}


// Call the function when the page loads
window.onload = askEmail;