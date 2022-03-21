const array = [1, 2, 3, 4];
function Sum(arr){
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(Sum(array))


const arrayOne = [1, 2, 3, 4];
function SumOne(arrOne){
    let sumOne = 0;
    let i = 0
    do {
        sumOne += arrOne[i];
        i++;
      } while (i<arrOne.length);
      return sumOne;
}
console.log(SumOne(arrayOne))


var sum = function(array) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}
sum([1,2,3,4]); // 6

var s = [1,2,3,4];
console.log(sum(s))