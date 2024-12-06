const h1=document.getElementById("heading")

function sumfun(a,b){
    const sum=a+b;
    console.log("---sum---:",sum);
    h1.innerText = `sum: ${sum}`;
    return sum;
}
// sumfun(5,8);
function subfun(a,b){
    const sub=a-b;
    console.log("---sub---:",sub);
    h1.innerText =  `sub: ${sub}`;
    return sub;
}
function delContent(){
    h1.innerText ="";
}
console.log("----------------------");
const  n1 = 5;
const n2=6;
console.log(n1);
 
 try{
    n1 =6;
 }catch(error){
console.log(error.message)
 }
console.log(n2);
console.log("-------------------------");

console.log("hello world");

console.log("new world")
// set interval'
//set timeout
const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        reject("internet problem🙄😓😔");
   
    },1000);
});
console.log(myPromise);

myPromise.then((Value)=>{
    console.log(Value);
})
.catch((error)=>{
    console.log(error);
})
console.log("promise start: ",52);
const promiseFun = async () => {
    const Value = await myPromise;
    console.log(Value,"55");
};

promiseFun();
console.log("promise end 62");