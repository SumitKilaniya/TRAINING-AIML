// // const num=prompt("enter a number");
// // let i;
// // if(num>0){
// //     for(i=num;i>0;i--){
// //         console.log(i);
// //     } iytiuwerytwityrteorteturtyeruejhfgdfnusldcvnx vhdhbf
// // }else {
// //     console.log("number is invalid")
// // }

// const newContent = "Hello world";
// h1.innerText = newContent;
// const elements = document.getElementsByClassName("heading");
// console.log(elements[0]);
// const newContent2 = "HELLO WORLD";
// elements[1].innerHTML = newContent2;


const oddThing = "ODD";
const eventhing = "EVEN";
const element =document.getElementsByClassName("heading");
console.log(element.length);
let i;

for(let i =0; i<element.length;i++){
    if(i%2==0){
        element[i].innerHTML = eventhing;
    }else{
        element[i].innerHTML = oddThing;
    }
}