// count occurrence of a  character in string

function countOccurrence(str, char) {
    let occurrence = 0;
    for (let i = 0; i < str.length; i++) {
        if(char == str[i]){
            occurrence++;
        }
    }
    console.log(occurrence);
}

countOccurrence("Hello Word", "o");