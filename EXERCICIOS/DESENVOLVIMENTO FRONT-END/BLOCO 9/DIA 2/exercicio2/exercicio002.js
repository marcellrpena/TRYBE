const fetch = require('node-fetch');

const fetchArrayCrypto = async () => {
  const urlCrypto = 'https://api.coincap.io/v2/assests';

  try {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchArrayCrypto();