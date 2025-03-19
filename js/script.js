// HTML Elements
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const login = document.getElementById("login");
const loginBtn = document.getElementById("login-btn");
const loginBtnMobile = document.getElementById("login-btn-mobile");
const closeLoginBtn = document.getElementById("close-login-btn");
const loginSubmitBtn = document.querySelector("input[type='submit']");
const signUpBtn = document.getElementById("signup-btn");
const errorPopup = document.getElementById("error");
const errorMsg = document.getElementById("error-msg");
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const themeToggleBtnMobile = document.getElementById("theme-toggle-mobile");
const themeToggleDarkIconMobile = document.getElementById(
  "theme-toggle-dark-icon-mobile"
);
const themeToggleLightIconMobile = document.getElementById(
  "theme-toggle-light-icon-mobile"
);

// Check if the user has a saved theme preference for light/dark mode
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // if dark mode is active, show the light mode icon
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleLightIconMobile.classList.remove("hidden");
} else {
  // if light mode is active, show the dark mode icon
  themeToggleDarkIcon.classList.remove("hidden");
  themeToggleDarkIconMobile.classList.remove("hidden");
}

if (document.documentElement.classList.contains("dark")) {
  logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
} else {
  logo.setAttribute("src", "./images/logo-bookmark.svg");
}

// Tabs Menu Event Listener
tabs.forEach(tab => tab.addEventListener("click", onTabClick));

// Hamburger Button Event Listener
btn.addEventListener("click", navToggle);

// Dark/Light Mode Button Event Listener
themeToggleBtn.addEventListener("click", () =>
  toggleMode(themeToggleDarkIcon, themeToggleLightIcon)
);

themeToggleBtnMobile.addEventListener("click", () =>
  toggleMode(themeToggleDarkIconMobile, themeToggleLightIconMobile)
);

// Open Login Event Listener
loginBtn.addEventListener("click", () => loginToggle());
loginBtnMobile.addEventListener("click", () => loginToggle(true));

// Close Login Event Listener
closeLoginBtn.addEventListener("click", () => loginToggle());
loginSubmitBtn.addEventListener("click", () => loginToggle());

// Listen for Signup Attempt
signUpBtn.addEventListener("click", () => {
  showErrorPopup("Sign up is not available at the moment.");
  loginToggle();
});

// Functions
function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach(tab => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach(panel => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target
  const target = e.target;
  target.classList.add("border-softRed", "border-b-4");

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");

  if (!document.documentElement.classList.contains("dark")) {
    if (menu.classList.contains("flex")) {
      logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    } else {
      logo.setAttribute("src", "./images/logo-bookmark.svg");
    }
  }
}

function toggleMode(dark, light) {
  // Toggle icon
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");

  // If is set in localStorage
  if (localStorage.getItem("color-theme")) {
    // if light, make dark and save in localStorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // if not in localStorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }

  if (document.documentElement.classList.contains("dark")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }

  if (
    !document.documentElement.classList.contains("dark") &&
    !menu.classList.contains("hidden")
  ) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  }
}

function loginToggle(togglenav = false) {
  login.classList.toggle("hidden");

  if (togglenav === true) navToggle();
}

function showErrorPopup(msg) {
  errorPopup.classList.toggle("hidden");
  errorMsg.textContent = msg;
  setTimeout(() => {
    errorPopup.classList.toggle("hidden");
    errorMsg.textContent = "";
  }, 3000);
}

// window.addEventListener("click", e => {
//   console.log(e.target);
// });
