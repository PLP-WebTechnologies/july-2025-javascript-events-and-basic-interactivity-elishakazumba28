document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("clickMsg").textContent = "You clicked the button!";
});

function hoverMessage() {
  document.getElementById("hoverText").textContent = "You hovered over the text!";
}

let darkMode = false;
document.getElementById("darkModeBtn").addEventListener("click", function() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
});

let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let message = "";

  if (name === "") message += "Name is required. ";
  if (email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) message += "Valid email is required. ";
  if (password === "" || password.length < 6) message += "Password must be at least 6 characters.";

  if (message) {
    document.getElementById("formMsg").textContent = message;
    document.getElementById("formMsg").style.color = "red";
  } else {
    document.getElementById("formMsg").textContent = "Form submitted successfully!";
    document.getElementById("formMsg").style.color = "green";
    document.getElementById("userForm").reset();
  }
});
