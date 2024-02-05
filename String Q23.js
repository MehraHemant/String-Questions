// remove first occurrence of a character from string.

const rmFirstOccur = (str, char) =>{
    let newStr = "";
    for(let i = 0; i<str.length; i++){
        if(char != str[i]){
            newStr += str[i];
        }else{
            continue
        }
    }
    console.log(newStr);
};


rmFirstOccur('this is the first string', 't')
// output : his is the first string