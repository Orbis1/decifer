"use strict";
const decipher = (arr, text) => {
    const source = text.split('').map(char => {
        const decoded = arr.filter(cipher => Object.keys(cipher)[0] === char)[0];
        if (!decoded)
            return { char, decoded: false };
        const decodedChar = Object.values(decoded)[0];
        return { char: decodedChar, decoded: true };
    });
    return source;
};
class Decifer {
    constructor() {
        this.value = '';
        this.decoderArr = [];
        this.inputSource = document.querySelector('#w3input');
        this.decoder = document.querySelector('#w3decoder');
        this.output = document.querySelector('#w3output');
    }
    readData() {
        this.value = (this.inputSource || {}).value || '';
    }
    convertDecoder() {
        const decoderString = this.decoder ? this.decoder.value : '';
        const arr = decoderString
            .split(/\n/)
            .map(s => s.replace(/ /g, ''))
            .filter(s => s.length > 0)
            .map(s => {
            const [key, value] = s.split(':');
            return { [key]: value };
        });
        this.decoderArr = arr;
    }
}
const decifer = new Decifer();
document.addEventListener('click', () => {
    decifer.readData();
    decifer.convertDecoder();
    const arr = decipher(decifer.decoderArr, decifer.value);
    if (decifer.output) {
        decifer.output.innerHTML = arr
            .map(a => {
            const { char, decoded } = a;
            if (decoded) {
                return `<font color="brown">${char}</font>`;
            }
            else {
                return char;
            }
        })
            .join('');
    }
});
