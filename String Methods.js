let String = "This is a String";
import substrMethod from "./Substring.js";
import splitMethod from "./SplitMethod.js";



// Slice
function sliceString(str, start_index, end_index) {
    let newString = "";
    let isSlicing = false;
    if (((str.length - 1) >= end_index) && (start_index < end_index)) {
        for (let index in str) {
            if (index == start_index) {
                isSlicing = true;
            }
            if (index == end_index) {
                isSlicing = false;
            }
            if (isSlicing) {
                newString += str[index]
            }
        }
    } else {
        return "Invalid Indexes"
    }
    return newString;
}

// console.log(sliceString(String, 2, 5));
// output => is




// trim start
const trimStart = (str) => {
    let trimmedString = "";
    let trim_start = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " " && !trim_start) {
            continue
        } else {
            trim_start = true;
            trimmedString += str[i];
        }
    }
    return trimmedString;
}

// console.log(trimStart("           it's a String."))
// output => is's a string





// reverse String
const reverseString = (str)=>{
    let arr = splitMethod(str, '');
    return (arr.reverse().join(''))
}

// console.log(reverseString('This is a string'))
// output => gnirts a si sihT



// trim end
const trimEnd = (str) => {
    let trimmedString = "";
    let trim_end = false;
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i] == " " && !trim_end) {
            continue
        } else {
            trim_end = true;
            trimmedString += str[i];
        }
    }
    return reverseString(trimmedString);
}
// console.log(trimEnd("           it's a String.          "))
// output => is's a string




// trim
const trim = (str) =>{
    let newStr = trimStart(str);
    newStr = trimEnd(newStr);
    return newStr;
}
// console.log(trim('       123123121      231    '))
// output => 123123121     231




// padStart
const padStart = (str, minPadding, number) => {
    str = str.toString();
    let numberCount = (minPadding - str.length) < 0 ? 0 : minPadding - str.length;
    let numbers = "";
    if (numberCount > 0) {
        for (let i = 1; i <= numberCount; i++) {
            numbers += number;
        }
    }
    return numbers + str;
}
// console.log(padStart("34", 6, 2)); 
// output => "22234"





// padEnd
const padEnd = (str, minPadding, number) => {
    str = str.toString();
    let numberCount = (minPadding - str.length) < 0 ? 0 : minPadding - str.length;
    let numbers = "";
    if (numberCount > 0) {
        for (let i = 1; i <= numberCount; i++) {
            numbers += number;
        }
    }
    return str + numbers;
}
// console.log(padEnd("34", 6, 2)); 
// output => "34222"





// Repeat
const repeat = (string, num) => {
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
}
// console.log(repeat(String, 4));
// output => This is a StringThis is a StringThis is a StringThis is a String





// Replace, only the first 
const replace = (str, word1, word2) => {
    let newString = "";
    let changed = false;
    for (let i = 0; i < str.length; i++) {
        if (!changed) {
            if (substrMethod(str, i, word1.length) == word1) {
                newString += word2;
                i = i + word1.length - 1;
                changed = true
            } else {
                newString += str[i];
            }
        } else {
            newString += str[i];
        }
    } return newString;
}
// console.log(replace("Strisg", 'is', 'at'))
// output => Stratg





// Replace all
const replaceAll = (str, word1, word2) => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (substrMethod(str, i, word1.length) == word1) {
            newString += word2;
            i = i + word1.length - 1;
        } else {
            newString += str[i];
        }
    } return newString;
}
// console.log(replaceAll("Strisgisisis", 'is', 'at'))
// output => Stratgatatat