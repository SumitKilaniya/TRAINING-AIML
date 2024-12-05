console.log("hello");
let arr = [22,56,89,45,8,5,6,9];
console.log(arr);
const sample=arr[7];
console.log(sample);
arr.splice(2,0,12,23);
console.log(arr);
let array = [1, 2, 3, 4, 5, 2, 6];
let numberToRemove = 2;

let newArray = array.filter(item => item !== numberToRemove);

console.log(newArray);
let trash = 45;
for(let i=0;i<6;i++){
    if (arr[i]==trash)
        arr.splice(i,1);

}
console.log(arr);