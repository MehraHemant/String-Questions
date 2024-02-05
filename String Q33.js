//  Count occurrence of a word

function countOccurrence(str, word) {
    let arr = str.split(' ');
    let occurrence = 0;
    for (let item of arr) {
        if (item === word) {
            occurrence++;
        }
    }
    console.log(occurrence);
}

countOccurrence('any any any what whatever', 'any')