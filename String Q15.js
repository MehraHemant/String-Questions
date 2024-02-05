// reverse order of word in given string

function reverseWord(str) {
 let arr = str.split(' ');
 for (let i=0;i<arr.length;i++) { 
   arr[i] = arr[i].split('').reverse().join('');
 }
 console.log(arr.join(' '));
}

reverseWord('it should be in reverse')

// Output: ti dluohs eb ni esrever