import { arGeraDujine } from "./arGeraDujine.js";

function renderDujine(kiekis) {
    if (!arGeraDujine(kiekis)) {
        console.log('Negera dujine...');
        return false;
    }

    let skylesHTML = '';
    let jungikliaiHTML = '';

    for (let i = 0; i < kiekis; i++) {
        skylesHTML += `<div class="skyle">0</div>`;
        jungikliaiHTML += `<div class="jungiklis">${i + 1}</div>`;
    }

    const HTML = `<div class="skyles">
            ${skylesHTML}
        </div>
        <div class="jungikliai">
            ${jungikliaiHTML}
        </div>`;

    document.querySelector('.dujine').innerHTML = HTML;
}

export { renderDujine }