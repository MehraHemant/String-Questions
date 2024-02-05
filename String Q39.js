// trim both leading and trailing white space characters from given
// string.

const trimWhiteSpaces = (str) => {
    let arr = str.split(' ');
    let newArr = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '') {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}


trimWhiteSpaces('        jdfhaksjd hjf ');
