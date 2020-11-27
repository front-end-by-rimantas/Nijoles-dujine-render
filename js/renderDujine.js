function renderDujine() {
    const kiekis = 4;

    let skylesHTML = '';
    let jungikliaiHTML = '';

    for (let i = 0; i < kiekis; i++) {
        skylesHTML += `<div class="skyle">${i + 1}</div>`
        jungikliaiHTML += `<div class="jungiklis">${i + 1}</div>`
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