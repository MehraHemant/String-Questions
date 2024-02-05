// Find number Vowels and Consonants

const countLetterType = (str) => {
    let countLetter = { vowels: 0, consonants: 0 }
    const vowels = 'aeiouAEIOU';
    const consonants = 'bcdfghjklmnpqrstwxyzBCDFGHJKLMNPQRSTWXYZ';
    for (let char of str) {
        for (let i in consonants) {
            if (char == consonants[i]) {
                countLetter.consonants += 1;
                break
            }
            else if(char == vowels[i]){
                countLetter.vowels += 1;
                break
            }
        }
    }
    console.log(countLetter)
}

countLetterType('asdfeqEwrte');
// Output
// { vowels: 4, consonants: 7 }
