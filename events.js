
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
let status = true;

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
window.addEventListener("load",toggleStatus);

// Klick auf Btn  --> Zustand umschalten
btn.addEventListener("click",toggleStatus);

/********  Business-Logic | Toggle **********/

// toggleStatus();
function  toggleStatus() {
    status = !status;
    updateView();
}

/********  Änderung in View-Schicht **********/

// Modul: Update der View-Schicht | Test:
// .. View folgt status
function updateView() {
    if (status) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
   btn.innerHTML = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}