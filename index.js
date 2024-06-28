const hamburgerButton = document.getElementById("hamburger-button");
const menuList = document.getElementById("menu-list");

hamburgerButton.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
