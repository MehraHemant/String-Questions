// remove all occurrence of a character from string

const allOccur = (str, char) =>{
    let newStr = "";
    for(let i of str){
        if(i== char){
            continue;
        }
        else{
            newStr += i;
        }
    }
    console.log(newStr)
}

allOccur('this removes all occurrences', 'o')
