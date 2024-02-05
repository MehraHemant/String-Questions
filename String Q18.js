// search All occurrence of a character

function allOccurence(str, char) {
    let occurrence = [];
    for (let i = 0; i < str.length; i++) {
        if(char == str[i]){
            occurrence.push(i);
        }
    }
    console.log(occurrence);
}

allOccurence("Hello Word", "o");
