const {expect} = require('chai')

function getColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const colorMap = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colorMap.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return colorMap;
}

function printColorMap(colorMap) {
    colorMap.forEach((line) => console.log(line));
}

function getColorMapLength(colorMap) {
    return colorMap.length;
}

const colorMap = getColorMap();
printColorMap(colorMap);
const result = getColorMapLength(colorMap);

// Test cases
expect(result).equals(25);
expect(colorMap[0]).equals('0 | White | Blue'); // Test for correct alignment
expect(colorMap[24]).equals('24 | Violet | Slate'); // Test for correct alignment
expect(getColorMapLength(getColorMap())).equals(25); // Test for correct length

console.log('All is well (maybe!)');
