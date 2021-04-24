const button = document.querySelector(".btn");
const inputText = document.querySelector(".input__text");
const outputText = document.querySelector(".output__text");

const urlServer = "https://api.funtranslations.com/translate/shakespeare.json";

function getUrl(text) {
  return urlServer + "?text=" + text;
}

function handleClick() {
  //getting input
  const input = inputText.value;

  //processinng input
  fetch(getUrl(input))
    .then((res) => res.json)
    .then((json) => {
      const translatedText = json;
      /*outputText.innerText*/ console.log(translatedText); //display output
    });
}

button.addEventListener("click", handleClick);
