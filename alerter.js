let alertFailureCount = 0;

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return 200;
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 0;
    }
}

alertInCelcius(400.5);
alertInCelcius(303.6);

// Strengthened tests to make them fail
assert(alertFailureCount === 0, "alertFailureCount should be 0");
assert(networkAlertStub(100) === 200, "networkAlertStub should return 200 for ok");
assert(networkAlertStub(500) === 500, "networkAlertStub should return 500 for not-ok");
assert(alertInCelcius(212) === undefined, "alertInCelcius should not return anything");

console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
