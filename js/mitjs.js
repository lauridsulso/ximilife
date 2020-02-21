"use strict";

function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }

}

function aktiverMultimedier() {

    for (let i = 0; i <= AVIdListe.length - 1; i++) {

        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }

    }
}

function aktiverTekstAnimation() {
    for (let i = 0; i <= tekstIdListe.length - 1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("slide-fwd-top");
        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("slide-fwd-top");
        }
    }
}

// Hovedprogramdel
const tekstIdListe = ["tekst1", "tekst2", "tekst3", "tekst4"];
const AVIdListe = ["paris", "istanbul", "firenze", "video"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = new Audio("");
AVIndholdsliste[1] = new Audio("");
AVIndholdsliste[2] = new Audio("");
AVIndholdsliste[3] = document.getElementById("video");


window.addEventListener("scroll", function () {
    aktiverMultimedier();
    aktiverTekstAnimation();
});
