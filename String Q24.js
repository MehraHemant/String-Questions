// remove last occurrence of a character from string.

const rmLastOccur = (str, char) => {
    let newStr = "";
    let position;
    for (let i = 0; i < str.length; i++) {
        if (char == str[i]) {
            position = i
        }
    }
    for (let i in str) {
        if (i == position) {
            continue
        } else {
            newStr += str[i]
        }
    }
    console.log(newStr)
};


rmLastOccur('this is the first string', 't')
// output : his is the first string