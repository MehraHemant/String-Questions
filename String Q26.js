// Remove all the repeated characters from a given string

const removeRepeated = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if(!arr.includes(str[i])){
            arr.push(str[i])
        }
    }
    console.log(arr.join(''))
}


removeRepeated('removerepeatedletter')