var input = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/groot.json"

function textTranslate(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Something wrong with the server. Try again after sometime.")
}

function clickHandler() {
    var textInput = input.value;
    fetch(textTranslate(textInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler)