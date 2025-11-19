// Strong password requirement:
// - At least 8 characters
// - 1 uppercase letter
// - 1 symbol
function isStrongPassword(pass) {
  const rule = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return rule.test(pass);
}

// ========== SIGNUP ==========
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPassword").value;

    if (!isStrongPassword(pass)) {
      alert("Password must contain: 1 uppercase, 1 symbol, and at least 8 characters.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, pass }));
    alert("Account created successfully!");
    window.location.href = "index.html";
  });
}

// ========== LOGIN ==========
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.pass !== pass) {
      alert("Incorrect email or password!");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  });
}

// ========== CHECK LOGIN PROTECTION ==========
function checkAuth() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// ========== LOGOUT ==========
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
