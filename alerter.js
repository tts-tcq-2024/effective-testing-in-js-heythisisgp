let alertFailureCount = 0;

function networkAlertStub(celcius) {
  console.log(`Alert! Temperature is ${celcius} degrees`);
  return celcius > 100 ? 500 : 200;
}

function alertInCelcius(farenheit) {
  const celcius = (farenheit - 32) * 5 / 9;
  const returnCode = networkAlertStub(celcius);
  if (returnCode !== 200) {
    alertFailureCount += 1; // Increment alertFailureCount if returnCode is not 200
  }
}

alertInCelcius(400.5);
alertInCelcius(303.6);
alertInCelcius(100.0);

if (alertFailureCount === 0) {
  throw new Error(`Expected at least 1 alert to fail, but got ${alertFailureCount}`);
}

console.log('All is well (maybe!)');
