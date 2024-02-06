// Remove all the occurrence


const removeALlOccurrence = (str, word) => {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (word == arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr.join(' ');
}

console.log(removeALlOccurrence('is as the is', 'is'))