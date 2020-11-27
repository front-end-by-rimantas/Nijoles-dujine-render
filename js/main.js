import { renderDujine } from './renderDujine.js';

const elementuKiekis = 4;

renderDujine(elementuKiekis);


const skyles = document.querySelectorAll('.skyle');
const jungikliai = document.querySelectorAll('.jungiklis');

const paspaudimai = Array(elementuKiekis).fill(0);

for (let i = 0; i < elementuKiekis; i++) {
    const jungiklis = jungikliai[i];

    jungiklis.addEventListener('click', () => {
        paspaudimai[i]++;
        const paspaustaSkyle = skyles[i];

        paspaustaSkyle.classList.toggle('kaista');
        paspaustaSkyle.innerText = paspaudimai[i];
    })
}