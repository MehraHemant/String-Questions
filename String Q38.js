// trim trailing white space characters from given string.

const trimWhiteSpaces = (str) => {
    let newStr = "";
    let revNewStr = "";
    let isRemoved = false;
    for (let i = str.length - 1; i > 0; i--) {
        if (!isRemoved && str[i] == " ") {
            continue;
        } else {
            isRemoved = true;
            newStr += str[i];
        }
    }
    for (let i = newStr.length - 1; i > 0; i--) {
        revNewStr += newStr[i];
    }
    console.log(revNewStr);
}


trimWhiteSpaces('        jdfhaksjd hjf ');
