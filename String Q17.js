// Last occurence of a character in a given string

// Find the first occurence of a character in a string

const lastOccurence = (str, char) =>{
    for(let i = str.length-1; i>=0; i--){
        if(str[i] === char){
            return i;
        }
    }
}

console.log(lastOccurence("Hello World", "o"))
// output = 7