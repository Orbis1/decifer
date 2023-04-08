"use strict";
const isCorrectPassword = (password) => {
    const buses = password.split(' ');
    const chars = buses.map(b => b.replace(/\d/gm, ''));
    const numbers = buses.map(b => b.replace(/[а-яА-Я]/gm, ''));
    const sum = numbers
        .map(n => parseInt(n, 10))
        .filter(n => !Number.isNaN(n))
        .reduce((a, b) => a + b);
    console.log({ password, buses, chars, numbers, sum });
    return chars.join() === 'БММММ' && sum === 873;
};
isCorrectPassword('Б 298 М2 М3 М4 М1');
