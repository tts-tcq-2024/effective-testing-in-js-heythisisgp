let alertFailureCount = 0;

// Network alert function, can be swapped out for different environments
function networkAlert(celcius) {
    // Stub implementation
    console.log(`Alert! Temperature is ${celcius} degrees`);
    return 200; // always returns 200 for the stub
}

// Updated implementation using dependency injection
function alertInCelcius(farenheit, networkAlertFunc) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertFunc(celcius);
    if (returnCode !== 200) {
        alertFailureCount += 1; // Correctly increment failure count
    }
}

// Tests
function testAlertInCelcius() {
    alertFailureCount = 0; // Reset failure count

    // Test case 1
    let result = alertInCelcius(400.5, networkAlert);
    console.assert(alertFailureCount === 0, `Expected 0 failures, but got ${alertFailureCount}`);

    // Test case 2 - Modify stub to return a non-200 code
    function failingNetworkAlert(celcius) {
        return 500; // Simulate a network failure
    }
    result = alertInCelcius(303.6, failingNetworkAlert);
    console.assert(alertFailureCount === 1, `Expected 1 failure, but got ${alertFailureCount}`);
}

// Run tests
testAlertInCelcius();
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
