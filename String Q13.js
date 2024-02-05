// Find reverse of a string

const findReverse = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    console.log(reverse);
}

findReverse('user');
// output: resustr