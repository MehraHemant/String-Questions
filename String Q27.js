// replace first occurrence of a character with another in a string

const replaceFirstOccur = (str, char1, char2) => {
    let newStr = "";
    let firstOccured = false;
    for (let i = 0; i < str.length; i++) {
        if (!firstOccured) {

            if (str[i] === char1) {
                newStr += char2;
                console.log(newStr);
                firstOccured = true;
            } else {
                newStr += str[i];
            }
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

replaceFirstOccur("this replace the first occurrence", "t", "V")