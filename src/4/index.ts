const isCorrectPassword = (password: string): boolean => {
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

isCorrectPassword('Б 111 М1 100 100 М1 М5 М3 552');

/*

Курский вокзал
Б
297 || М1 || 379 || M6
РАН (Гагарин)
М1 М3 800 379 175
Институт Курчатова
М5 379 М1
Министерство обороны
М5 М3 552 171 М6 469
Восточный вокзал

*/
