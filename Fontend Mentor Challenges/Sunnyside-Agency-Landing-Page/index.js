const toggleNavBarBtn = document.getElementById("toggle-nav-bar");
const navBarMenu = document.getElementById("nav-bar-menu");

let isShowNavBarMenu = false;

console.log(toggleNavBarBtn)

toggleNavBarBtn.addEventListener("click", toggleNavBarMenu);

function toggleNavBarMenu() {
    isShowNavBarMenu = !isShowNavBarMenu;

    if (isShowNavBarMenu) {
        navBarMenu.style.display = 'block';
    } else {
        navBarMenu.style.display = 'none';
    }
}