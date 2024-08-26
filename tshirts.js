const { expect } = require('chai');

function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}

// Test cases to strengthen the tests and identify the bug

// Test for size 'S'
expect(size(37)).to.equal('S', 'Expected size S for 37 cms');
expect(size(37.5)).to.equal('S', 'Expected size S for 37.5 cms'); // Testing a value slightly above 37

// Test for size 'M'
expect(size(38)).to.equal('M', 'Expected size M for 38 cms'); // Boundary case, which should be 'M'
expect(size(40)).to.equal('M', 'Expected size M for 40 cms');
expect(size(41.9)).to.equal('M', 'Expected size M for 41.9 cms'); // Testing a value slightly below 42

// Test for size 'L'
expect(size(42)).to.equal('L', 'Expected size L for 42 cms'); // Boundary case, which should be 'L'
expect(size(43)).to.equal('L', 'Expected size L for 43 cms');
expect(size(50)).to.equal('L', 'Expected size L for 50 cms'); // Testing a value well above 42

// Additional boundary case to ensure correctness
expect(size(38.1)).to.equal('M', 'Expected size M for 38.1 cms'); // Testing a value slightly above 38

console.log('All is well (maybe!)');

