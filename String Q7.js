// upperCase to Lowercase

const toLower = (str) => {
    let newStr = '';
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of str) {
        for (let i = 0; i < upperCaseLetters.length; i++) {
            if (char === upperCaseLetters[i]) {
                newStr += lowerCaseLetters[i];
                break
            }
            else if (char === lowerCaseLetters[i]) {
                newStr += char;
                break
            }
            else if (char == " ") {
                newStr += " ";
                break
            }
        }
    }
    console.log(newStr)
}

toLower("Hello World");
// Output = hello world