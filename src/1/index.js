const decipher = (arr, text) => {
  let newText = text;
  arr.forEach(cipher => {
    console.log(cipher);
    const [decoded, encoded] = Object.entries(cipher)[0];
    console.log(decoded, encoded);
    newText = newText.replaceAll(decoded, encoded);
  });
  return newText;
};

module.exports = { decipher };
