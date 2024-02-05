// count frequencies of character in a string

const countFrequency= (str) => {
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
    console.log(obj);
}

countFrequency('count frequencies of character in a string')