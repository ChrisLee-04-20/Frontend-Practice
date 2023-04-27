const API_URL = "https://api.adviceslip.com/advice";

async function getResponse(url) {
    try {
        const response = await fetch(url);
        const resText = await response.json();
        return resText;
    } catch (e) {
        console.log("ERROR: Cannot get resposne from the api: " + e);
    }
}

async function renderSlip() {
    const resultData = await getResponse(API_URL);
    const jObject = resultData.slip;
    const apiId = document.getElementById("api-id");
    const text = document.getElementById("text");

    apiId.innerText = jObject.id;
    text.innerText = "\"".concat(jObject.advice).concat("\"");
}

renderSlip();