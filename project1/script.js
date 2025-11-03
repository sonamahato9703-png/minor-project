function checkResult() {
  const rollNo = document.getElementById("rollNo").value;
  const display = document.getElementById("resultDisplay");

  if (rollNo === "101") {
    display.innerHTML = "<h3>Result: Passed with 85%</h3>";
  } else if (rollNo === "102") {
    display.innerHTML = "<h3>Result: Passed with 78%</h3>";
  } else {
    display.innerHTML = "<h3>No record found</h3>";
  }
}

function loginUser() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMessage");

  if (user === "student" && pass === "1234") {
    msg.textContent = "Login successful! Redirecting...";
    msg.style.color = "green";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    msg.textContent = "Invalid username or password.";
    msg.style.color = "red";
  }

  return false;
}
