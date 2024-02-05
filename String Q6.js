// LowerCase to UpperCase

const toUpper = (str) => {
    let newStr = '';
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of str) {
        for (let i = 0; i < lowerCaseLetters.length; i++) {
            if (char === lowerCaseLetters[i]) {
                newStr += upperCaseLetters[i]
                break
            }
            else if (char === upperCaseLetters[i]) {
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

toUpper("Hello World");
// Output = HELLO WORLD