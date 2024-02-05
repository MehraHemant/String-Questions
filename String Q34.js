// REmove first occurrence of a word in a string

const removeFirst = (str, word) => {
    isRemoved = false
    let arr = str.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isRemoved) {
            if (word !== arr[i]) {
                newArr.push(arr[i])
            } else {
                isRemoved = true
            }
        }
        else {
            newArr.push(arr[i])

        }
    }
    return newArr.join(' ');
}

console.log(removeFirst('is is is asthe the', 'is'))