function substrMethod(str, fromIndex, length) {
    let isSlicing = false;
    let lastIndex = str.length - 1;
    let start_index = (fromIndex < 0) ? lastIndex + fromIndex : fromIndex;
    let end_index = length ? (fromIndex + length-1) : (str.length - 1);
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
            if (index == end_index && length) {
                newString += str[index];
                isSlicing = false;
            }
            if (fromIndex >= 0) {
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

// console.log(substrMethod("String", 3, 3));
// output => ing

export default substrMethod;




