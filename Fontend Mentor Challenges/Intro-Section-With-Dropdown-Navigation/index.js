const featuresTtemsList = document.getElementById("features-items");
const companyItemsList = document.getElementById("company-items");
const showFeatures = document.getElementById("features-show");
const showCompany = document.getElementById("company-show");
let featuresTtemsState = false;
let companyItemsListState = false;

console.log(featuresTtemsList.style.display);

showFeatures.addEventListener("click", function(){
    if (featuresTtemsState) {
        featuresTtemsList.style.display = "none";
    } else {
        featuresTtemsList.style.display = "block";
    }
    featuresTtemsState = !featuresTtemsState;
});

showCompany.addEventListener("click", function(){
    if (companyItemsListState) {
        companyItemsList.style.display = "none";
    } else {
        companyItemsList.style.display = "block";
    }
    companyItemsListState = !companyItemsListState;
});