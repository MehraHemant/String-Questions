// Find total number of alphabet, digit and specialCharater in a string.

function numbers(str) {
    let obj = {alphabetCount: 0, numberCount: 0, specialCharacterCount: 0};
    let numbers = '0123456789';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let specialChar = '@_#-/.!#$%^&';

    for (let char of str) {
        for (let i in alphabet) {
            if (char == alphabet[i] || char == upperAlphabet[i]) {
                obj.alphabetCount += 1;
                break
            } else if (char == numbers[i]) {
                obj.numberCount += 1;
            }
            else if (char == specialChar[i]) {
                obj.specialCharacterCount += 1;
            }
        }
    }
    console.log(obj);

}

numbers('asd123@#');
// output 
// { alphabetCount: 3, numberCount: 3, specialCharacterCount: 3 }