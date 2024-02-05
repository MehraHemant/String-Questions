// Search all occurrence

const allOccurrence = (str, word) => {
    let occurrence = []
    for (let i = 0; i <= str.length - word.length; i++) {
        let match = true;
        for (let j = 0; j < word.length; j++) {
            if (str[i + j] !== word[j]) {
                match = false;
                break;
            }
        }
        if (match) { occurrence.push(i) }
    }
    console.log(occurrence)
}

allOccurrence('this is this and that is that', 'that')