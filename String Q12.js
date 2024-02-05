// Count total number of word in a String

const numberOfWords = (str) => {
    let word;
    if (str[0] && str[str.length-1] != " ") { word = 1 } else { word = 0 }
    for (let i in str) {
        if (str[i] === ' ') { word++ }
    }
    console.log(word)
}

numberOfWords('This is a demo')
// Output = 4