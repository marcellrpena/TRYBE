const areaTexto = document.querySelector('#descript');
let maxLength = 30;
areaTexto.addEventListener('input', charCount);

function charCount() {
  const charLength = areaTexto.value.length;
  const charCount = document.querySelector('p');
      console.log(areaTexto.value);
      maxLength = 30 - charLength;
    charCount.innerText = maxLength;
}
