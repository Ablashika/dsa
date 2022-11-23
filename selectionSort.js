function selectionSort(array) {

for (let i = 0; i < array.length; i++){
    // set current index as min
let min = i;
let temp = array[i]
     for (let j =  i + 1; j < array.length; j++) {
        if (array[j] < array[i] ) {
               // minimum will be updeated if current minimum is lower than previous
               min = j
        }
        
     }

     array[i] = array[min];
     array[min] = temp;

}
return array

}

console.log(selectionSort([1,4,4,8,5,23,6,9,8,3,7,2,13,]))