/* const fetch = require('node-fetch'); */
const ul = document.querySelector('#listCryptoCurrent');

const fetchArrayCrypto = async () => {
  const urlCrypto = `https://api.coincap.io/v2/assets`;
  try {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    appendListCrypto(Object.values(data.data));
  } catch (error) {
    console.log('deu zebra');
  }
}

const appendListCrypto = (cryptoArray) => {
  cryptoArray.reduce((acc, curr, idx) => {
    if (idx < 10) {
      acc.push(curr);
    }
    return acc;
  }, []).map((data) => {
    const li = document.createElement('li');
    li.innerText = `${data.name} (${data.symbol}) : ${parseFloat(data.priceUsd).toFixed(4)}`;
    ul.appendChild(li);
  })
}

window.onload = () => fetchArrayCrypto();
