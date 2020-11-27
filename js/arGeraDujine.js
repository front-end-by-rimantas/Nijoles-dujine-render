function arGeraDujine(elementuKiekis) {
    if (typeof elementuKiekis !== 'number' ||
        !isFinite(elementuKiekis)) {
        console.error('ERROR: dujines elementu kiekis turi buti skaicius');
        return false;
    }
    if (elementuKiekis < 1) {
        console.error('ERROR: skyliu kiekis turi buti teigiamas skaicius')
        return false;
    }
    if (elementuKiekis % 1 !== 0) {
        console.error('ERROR: skyliu kiekis turi buti sveikas skaicius')
        return false;
    }

    return true;
}

export { arGeraDujine }