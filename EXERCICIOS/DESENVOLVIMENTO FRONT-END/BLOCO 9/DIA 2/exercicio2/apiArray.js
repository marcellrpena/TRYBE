const fetch = require('node-fetch');

const fetchArrayCrypto = async () => {
  const urlCrypto = `https://api.coincap.io/v2/assets`;

  try {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    console.log(Object.values(data.data));
  } catch (error) {
    return error;
  }
}

module.exports = fetchArrayCrypto;