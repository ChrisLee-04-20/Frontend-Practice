const featuresTtemsList = document.getElementById("features-items");
const companyItemsList = document.getElementById("company-items");
const showFeatures = document.getElementById("features-show");
const showCompany = document.getElementById("company-show");
const feauturesArrow = document.getElementById("arrow-features");
const companyArrow = document.getElementById("arrow-company");

const arrowClickedStyle = "arrow-clicked";
let featuresTtemsState = false;
let companyItemsListState = false;

console.log(featuresTtemsList.style.display);

showFeatures.addEventListener("click", function(){
    feauturesArrow.classList.toggle(arrowClickedStyle);
    if (featuresTtemsState) {
        featuresTtemsList.style.display = "none";
    } else {
        featuresTtemsList.style.display = "block";
    }
    featuresTtemsState = !featuresTtemsState;
});

showCompany.addEventListener("click", function(){
    companyArrow.classList.toggle(arrowClickedStyle);
    if (companyItemsListState) {
        companyItemsList.style.display = "none";
    } else {
        companyItemsList.style.display = "block";
    }
    companyItemsListState = !companyItemsListState;
});