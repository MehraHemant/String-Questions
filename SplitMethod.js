// Split();
const splitMethod = (string, splitChar) => {
    let newArr = [];
    let newStr = "";
    for (let value of string) {
        if (!splitChar.length) {
            newArr.push(value);
        } else {
            if (value != splitChar) {
                newStr += value
            } else {
                newArr.push(newStr);
                newStr = ""
            }
        }
    }
    newStr.length && newArr.push(newStr);
    return newArr;
}
// console.log(splitMethod('this is a demo text', ' '))
// output => [ 'this', 'is', 'a', 'demo', 'text' ]


export default splitMethod