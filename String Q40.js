// remove all extra blank spaces from given string.

const removeBlankSpaces = (str) => {
    str = str.trim();
    let newStr = ""
    let isPrevSpace = false;
    for (let char of str) {
        if (char !== " ") {
            newStr += char
            isPrevSpace = false;
        }
        else {
            if (!isPrevSpace) {
                newStr += char
            } else {
                continue
            }
            isPrevSpace = true;
        }
    }
    console.log(newStr)
}

removeBlankSpaces('         ajkgsjd sdjga      salgjdk')
