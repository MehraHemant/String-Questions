// REmove last occurrence of a word in a string


const removeLast = (str, word) => {
    isRemoved = false
    let arr = str.split(' ').reverse();
    for (let i = 0; i < arr.length; i++) {
        if (!isRemoved) {
            if (word === arr[i]) {
                isRemoved = true;
                arr.splice(i, 1)
                break
            }
        }
    }
    return arr.reverse().join(' ');
}

console.log(removeLast('is is is asthe the is', 'is'))