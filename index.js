// Below: Initial vaiables are defined and the useer input is converted to celcius via a function.

const userTemperature = prompt('Please enter your local temperature in Fahrenheit. We will convert the temperature to Celsius.')
const userTempAsNum = Number(userTemperature);

const convertToCelsius = () => {
  return (userTempAsNum -32)*(5/9);
 
}

convertToCelsius();

const celsiusTemp = convertToCelsius();

// Below: A function generates a description for the temperature given by the user.

const describeTmperature = (range1,range2,range3,range4,range5) => {
  if (Number(userTemperature) < 32)
    return(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is very cold!`);
  else if (Number(userTemperature) < 64 && Number(userTemperature) >= 32)
    return(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is cold!`);
  else if (Number(userTemperature) < 86 && Number(userTemperature) >= 64)
    return(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is warm!`);
  else if (Number(userTemperature) <100 && Number(userTemperature) >= 86)
    return(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is hot!`);
  else if (Number(userTemperature) >=100)
    return(`You entered ${userTempAsNum} degrees Farenheit, that is ${celsiusTemp} degrees Celcius. That is very hot, wear sunscreen!`);

}

describeTmperature();

const message = describeTmperature();

// Below: a function sends an alert based off of the number the user entered. It contains the description generated above.

const createMessage = () => {
  alert(message)
}

createMessage();