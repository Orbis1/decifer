const isCorrectPassword = (password: string): boolean => {
  const chars = password.replace(/\d/gm, '');
  const numbers = password.split(/[а-яА-Я]/gm);
  const sum = numbers
    .map(n => parseInt(n, 10))
    .filter(n => !Number.isNaN(n))
    .reduce((a, b) => a + b);

  console.log({ password, chars, numbers, sum });
  return chars === 'БММММ' && sum === 873;
};

isCorrectPassword('Б1М2М3М4М');
