const inputName = document.querySelector('#nome');
const buttonSubmit = document.getElementById('submit');
const acorddingImg = document.getElementById('imgExposing');
const inputEmail = document.getElementById('email');
const inputMotivo = document.getElementById('motivoWin')

function stopRefresh(event) {
  const check = acorddingImg.checked; //--> verifica se o campo obrigatório está marcado
  const valueEmail = inputEmail.value;
  const valueName = inputName.value;
  const valueMotivo = inputMotivo.value;
    if (
      valueEmail.length < 10 || valueEmail.length > 40 || 
      valueName.length < 10 || valueName.length > 50 ||
      valueMotivo.length > 500) {
        alert('Dados Inválidos');
    } else if (check === true) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
        event.preventDefault();//estou querenado impedir apenas o botão de enviar, portanto, só estou ativando esse metodo no momento em que todos os pre-requisitos foram aceitos do contrário caso eu o ative antes ele vai impedir comportamentos benéficos como os avisos de campos errados e box não marcados.
      }
  }  
buttonSubmit.addEventListener('click', stopRefresh);