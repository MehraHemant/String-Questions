// Find the first occurence of a character in a string

const firstOccurence = (str, char) =>{
    for(let i = 0; i<str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
}

console.log(firstOccurence("Hello World", "o"))
// output = 4