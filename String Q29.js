// Replace all the occurrence

const replaceLastOccur = (str, char1, char2) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (char1 == str[i]) {
            newStr += char2;
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr)
};

replaceLastOccur("this is last char to replace", "e", "t")