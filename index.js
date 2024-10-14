// Below: Initial vaiables are defined and the useer input is converted to celcius via a function.

const userTemperature = prompt('Please enter your local temperature in Fahrenheit. We will convert the temperature to Celsius.')
const userTempAsNum = Number(userTemperature);

const convertToCelsius = (tempToConvert) => {
  return (tempToConvert -32)*(5/9);
 
}

const celsiusTemp = convertToCelsius(userTempAsNum);

// Below: A function generates a description for the temperature given by the user.

const describeTmperature = (fahrenheit) => {
  if (Number(fahrenheit) < 32)
    return(`You entered ${fahrenheit} degrees Fahrenheit, that is ${celsiusTemp} degrees Celcius. That is very cold!`);
  else if (Number(fahrenheit) < 64 && Number(userTemperature) >= 32)
    return(`You entered ${fahrenheit} degrees Fahrenheit, that is ${celsiusTemp} degrees Celcius. That is cold!`);
  else if (Number(fahrenheit) < 86 && Number(userTemperature) >= 64)
    return(`You entered ${fahrenheit} degrees Fahrenheit, that is ${celsiusTemp} degrees Celcius. That is warm!`);
  else if (Number(fahrenheit) <100 && Number(userTemperature) >= 86)
    return(`You entered ${fahrenheit} degrees Fahrenheit, that is ${celsiusTemp} degrees Celcius. That is hot!`);
  else if (Number(f) >=100)
    return(`You entered ${fahrenheit} degrees Fahrenheit, that is ${celsiusTemp} degrees Celcius. That is very hot, wear sunscreen!`);

}

const message = describeTmperature(userTemperature);

// Below: a function sends an alert based off of the number the user entered. It contains the description generated above.

const createMessage = () => {
  alert(message)
}

createMessage();