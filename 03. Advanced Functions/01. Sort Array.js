function sortArray(array, typeSort) {
    if(typeSort === "asc") {
        array.sort((a, b) => a - b);
    } else if("desc") {
        array.sort((a, b) => b - a);
    }
    return array;
}
sortArray([14, 7, 17, 6, 8], 'asc');