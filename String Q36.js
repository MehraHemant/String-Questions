// Remove all the occurrence


const removeLast = (str, word) => {
    let arr = str.split(' ');
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (word == arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr.join(' ');
}

console.log(removeLast('is as the is', 'is'))