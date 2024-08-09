const config = {
    useRealNetwork: false 
};

// Stub implementation for testing
function stubNetworkAlert(celcius) {
    return 200; // always returns 200 for the stub
}

// Real network implementation (placeholder)
function realNetworkAlert(celcius) {
    console.log(`Real Alert! Temperature is ${celcius} degrees`);
    return 200; 
}

// Function to get the appropriate network alert function based on configuration
function getNetworkAlertFunction() {
    return config.useRealNetwork ? realNetworkAlert : stubNetworkAlert;
}

// Function to send alert
function alertInCelcius(farenheit, networkAlertFunc) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertFunc(celcius);
    if (returnCode !== 200) {
        alertFailureCount += 1; 
    }
}

// Tests
function testAlertInCelcius() {
    alertFailureCount = 0;

    let networkAlertFunc = getNetworkAlertFunction();
    alertInCelcius(400.5, networkAlertFunc);
    console.assert(alertFailureCount === 0, `Expected 0 failures, but got ${alertFailureCount}`);

    function failingStubNetworkAlert(celcius) {
        return 500; // Simulate a network failure
    }
    networkAlertFunc = failingStubNetworkAlert;
    alertInCelcius(303.6, networkAlertFunc);
    console.assert(alertFailureCount === 1, `Expected 1 failure, but got ${alertFailureCount}`);
}

// Run tests
testAlertInCelcius();
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');

// Example of switching environment
config.useRealNetwork = true; // Switch to real network communication
let networkAlertFunc = getNetworkAlertFunction();
alertInCelcius(400.5, networkAlertFunc);
