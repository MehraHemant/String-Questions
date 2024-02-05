// Check whether a string is palindrom or not

const findReverse = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

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
    return newStr;
}


const isPalindrom =(str)=>{
    if(!str){ return console.log('Not Palindrome')}
    let newStr = toLower(str);
    if(newStr == findReverse(newStr)){
        console.log("Palindrome");
    }
    else{
        console.log('Not Palindrome')
    }
}
isPalindrom("asdsa")
// Output= Palindrome