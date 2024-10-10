const userTemperature = prompt('Please enter your local temperature in Fahrenheit. We will convert the temperature to Celsius.')
const userTempAsNum = Number(userTemperature);

const convertToCelsius = () => {
  return (userTempAsNum -32)*(5/9);
 
}

convertToCelsius();

const celsiusTemp = convertToCelsius();

const describeTmperature = () => {
  if (Number(userTemperature) < 32)
    alert(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is very cold!`);
  else if (Number(userTemperature) < 64 && Number(userTemperature) >= 32)
    alert(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is cold!`);
  else if (Number(userTemperature) < 86 && Number(userTemperature) >= 64)
    alert(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is warm!`);
}

describeTmperature();