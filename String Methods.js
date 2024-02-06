let String = "This is a String";

// Slice
function sliceString(str, start_index, end_index) {
    let newString = "";
    let isSlicing = false;
    if (str.length - 1 >= end_index && start_index < end_index) {
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

console.log("Sliced string: ", sliceString(String, 2, 5));



// substr()

function substrMethod(str, fromIndex, length) {
    let isSlicing = false;
    let lastIndex = str.length - 1;
    let start_index;
    (fromIndex < 0) && (start_index = lastIndex + fromIndex);
    end_index = length ? fromIndex + length : str.length - 1;
    let newString = "";

    if (lastIndex >= end_index && start_index < end_index) {
        for (let index in str) {
            if (fromIndex < 0) {
                if (isSlicing) {
                    newString += str[index]
                }
            }
            if (index == start_index) {
                isSlicing = true;
            }
            if (index == end_index && end_index != str.length - 1) {
                isSlicing = false;
            }
            if (fromIndex > 0) {
                if (isSlicing) {
                    newString += str[index]
                }
            }
        }
    } else {
        return "Invalid Indexes"
    }
    return newString;
}

console.log(substrMethod(String, -5));



// trim

const trimString = (str) => {
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

console.log(trimString("           it's a String."))


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

console.log(padStart("34", 6, 2)); // returns "22234"

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

console.log(padEnd("34", 6, 2)); // returns "22234"



// Repeat
const repeat = (string, num) => {
    let newString = "";
    for(let i=0; i<num;i++){
        newString+=string;
    }
    return newString;
}

console.log(repeat(String, 4));

// Replace, only the first 
const replace = (word1, word2)=>{

}