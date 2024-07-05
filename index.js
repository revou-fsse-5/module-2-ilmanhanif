const hamburgerButton = document.getElementById("hamburger-button");
const menuList = document.getElementById("menu-list");

hamburgerButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// dark mode

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const theme = localStorage.getItem("theme") || "light";
body.classList.add(theme);
toggle.classList.add(theme === "dark" ? "ph-moon" : "ph-sun");

toggle.addEventListener("click", function () {
    const isDarkMode = body.classList.toggle("dark");
    body.classList.toggle("light", !isDarkMode);
    this.classList.toggle("ph-sun", !isDarkMode);
    this.classList.toggle("ph-moon", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});
