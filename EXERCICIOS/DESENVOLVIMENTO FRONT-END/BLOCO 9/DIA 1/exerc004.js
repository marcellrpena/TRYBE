const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temp, delay) => {
  setTimeout(() => {
    console.log(`Delay time ${delay}`)
    console.log(`Mars temperature is: ${temp} degree Celsius`)
  }, delay);
}

sendMarsTemperature(getMarsTemperature(), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo