//find highest frequency character in a string.


const countFrequency = (str) => {
    maxCount = 0;
    let charMax = [];
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        }
        else if (str[i] == " ") {
            continue
        } else {
            obj[str[i]] = 1;
        }
    }
    for (let item in obj) {
        if (maxCount < obj[item]) {
            maxCount = obj[item];
            charMax = [item];
        }
        else if(maxCount == obj[item]){
            charMax.push(item);
        }
    }
    return charMax;
}

console.log(countFrequency('sldghakl dsgaddsg'));