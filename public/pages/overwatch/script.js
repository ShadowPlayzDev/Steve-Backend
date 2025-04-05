document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userInfo = document.getElementById("user-info");
  const loggedIn = document.getElementById("logged-in");
  const userName = document.getElementById("user-name");
  const userAvatar = document.getElementById("user-avatar");

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (user) {
    // User is logged in
    loggedIn.style.display = "flex";
    userName.textContent = user.username;
    userAvatar.src = user.avatarUrl;
    loginBtn.style.display = "none";
  } else {
    // User is not logged in
    loggedIn.style.display = "none";
    loginBtn.style.display = "block";
  }

  // Handle login (Trigger OAuth flow here)
  loginBtn.addEventListener("click", () => {
    // Trigger the Discord OAuth flow
    window.location.href = "/api/auth/discord";
  });

  // Handle logout
  logoutBtn.addEventListener("click", () => {
    // Clear user session and data
    localStorage.removeItem("user");
    window.location.reload();
  });
});
