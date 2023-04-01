const featuresTtemsList = document.getElementById("features-items");
const companyItemsList = document.getElementById("company-items");
const showFeatures = document.getElementById("features-show");
const showCompany = document.getElementById("company-show");
const feauturesArrow = document.getElementById("arrow-features");
const companyArrow = document.getElementById("arrow-company");
const showMenuIcon = document.getElementById("show-menu-icon");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navInfoLogin = document.querySelector(".nav-info-login");

const arrowClickedStyle = "arrow-clicked";
let featuresTtemsState = false;
let companyItemsListState = false;
let isMenuOpen = false;

showFeatures.addEventListener("click", function(){
    feauturesArrow.classList.toggle(arrowClickedStyle);
    if (featuresTtemsState) {
        featuresTtemsList.style.display = "none";
    } else {
        featuresTtemsList.style.display = "grid";
    }
    featuresTtemsState = !featuresTtemsState;
});

showCompany.addEventListener("click", function(){
    companyArrow.classList.toggle(arrowClickedStyle);
    if (companyItemsListState) {
        companyItemsList.style.display = "none";
    } else {
        companyItemsList.style.display = "grid";
    }
    companyItemsListState = !companyItemsListState;
});

showMenuIcon.addEventListener("click", ()=> {
    if (isMenuOpen) {
        closeIcon.style.display = "none";
        menuIcon.style.display =  "block";
        navInfoLogin.style.display = "none";
        document.body.style.backgroundColor = "white";
        document.body.style.opacity = "1";
    } else {
        closeIcon.style.display = "block";
        menuIcon.style.display =  "none";
        navInfoLogin.style.display = "flex";
        document.body.style.backgroundColor = "rgb(33 33 33 / 87%)";        
        document.body.style.opacity = "0.5";
    }
    isMenuOpen = !isMenuOpen;
})

//detect the screen size and change the cover img
document.onreadystatechange = changeCoverImg;

//
window.addEventListener("resize", changeCoverImg);

function changeCoverImg() {
    const mobileImg = document.getElementById("mobile-cover-img");
    const desktopImg = document.getElementById("desktop-cover-img");
    if(window.innerWidth > 850) {
        mobileImg.style.display = "none";
        desktopImg.style.display = "block";
    } else {
        mobileImg.style.display = "block";
        desktopImg.style.display = "none";
    }
}