const button = document.querySelector(".btn");
const inputText = document.querySelector(".input__text");
const outputText = document.querySelector(".output__text");

const urlServer = "https://api.funtranslations.com/translate/shakespeare.json";

function getUrl(text){
    console.log(urlServer + "?text=" + text);
}



button.addEventListener("click", () => getUrl(inputText.value));
