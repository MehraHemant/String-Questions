// Replace last occurrence of a char

const replaceLastOccur = (str, char1, char2) => {
    let newStr = "";
    let position;
    isReplaced = false;
    for (let i = 0; i < str.length; i++) {
        if (char1 == str[i]) {
            position = i
        }
    }
    for (let i in str) {
        if (i == position) {
            newStr += char2
            isReplaced = true;
        } else {
            newStr += str[i]
        }
    }
    console.log(newStr)
};

replaceLastOccur("this is last char to replace", "e", "t")