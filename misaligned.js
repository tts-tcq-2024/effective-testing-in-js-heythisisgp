const {expect} = require('chai');

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let output = '';
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            output += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}\n`;
        }
    }
    return output;
}

result = print_color_map();
expect(result).to.contain('1 | White | Blue'); // Pair number should start from 1
expect(result).to.contain('25 | Violet | Slate'); // Pair number should end at 25
expect(result).not.to.contain('0 | White | Blue'); // Pair number should not start from 0
console.log('All is well (maybe!)');
