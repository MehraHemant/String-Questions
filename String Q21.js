//find lowest frequency character in a string.


const countFrequency= (str) => {
    let minCount = Infinity;
    let charMin = [];
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        }
        else if(str[i] == " "){
            continue
        } else {
            obj[str[i]] = 1;
        }
    }
    for (let item in obj) {
        if (minCount > obj[item]) {
            minCount = obj[item];
            charMin = [item];
        }
        else if(minCount == obj[item]){
            charMin.push(item);
        }
    }
    return charMin;
}

console.log(countFrequency('sldghakl z dsgadsg'));