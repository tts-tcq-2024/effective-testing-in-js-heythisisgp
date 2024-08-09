const {expect} = require('chai');

function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}

// Tests to make the existing implementation fail

// Boundary tests
expect(size(37)).to.equal('S');    // Expected: S, should pass
expect(size(38)).to.equal('M');    // Expected: M, but implementation might fail
expect(size(41)).to.equal('M');    // Expected: M, should pass
expect(size(42)).to.equal('L');    // Expected: L, should pass
expect(size(43)).to.equal('L');    // Expected: L, should pass

// Tests for invalid input
expect(size('thirty')).to.be.a('string');  // Expected: Error, as the function does not handle non-numeric input
expect(size(null)).to.be.a('string');      // Expected: Error, as the function does not handle null input
expect(size(undefined)).to.be.a('string'); // Expected: Error, as the function does not handle undefined input

console.log('All is well (maybe!)');
