// Trim leading white spaces;

let trimWhiteSpaces = (str) =>{
    let newStr = "";
    let isRemoved = false;
    for(let letter of str){
        if(!isRemoved && letter == " ") {
            continue;
        }else{
            isRemoved = true;
            newStr += letter;
        }
    }
console.log(newStr);
}

trimWhiteSpaces('        jdfhaksjd hjf ');
