// function greet(greeting, punctuation) {
//     console.log(greeting + ", " + this.name + punctuation);
// }

// const person = { name: "Vishnu" };

// const greetVishnu = greet.bind(person, "Hey");
// greetVishnu("!!!"); 

// let animal={
//     name:"animal",
//     eat(a,b){
//         console.log("1 "+ this.name+" eating "+b+" "+a)
//     }
// };

// let human={
//     name:'human'
// };

// let print=animal.eat.bind(human, 10, 'chips');
// print(10, 'chips');
// print(10, 'chips');

// var a=10;
// function outer(){
//     var a=20;
//     function inner(){
//         console.log(a);
//         var b=30;
//     }
//     inner();
//     // console.log(b);
// }

// outer();
// console.log(a);

// let str="Hello World from Vishnu";


// function deepCopy(obj) {
//     if (typeof obj!=='object'){
//         return obj; 
//     }

//     if (Array.isArray(obj)) {
//         return obj.map(x=>x*1);
//     }

//     let copy = {}; 

//     for (let key in obj) {
//         copy[key] = deepCopy(obj[key]); 
//     }

//     return copy;
// }
// const obj1 = {
//     a: 1,
//     b :"hello",
//     c : [1,2,3],
//     d : { x: 10 , y : 20},
//     e: function(){
//         return "test";
//     },
// };

// const obj2 = deepCopy(obj1);

// console.log(obj2)

// obj1.c.push(4);
// obj1.d.x = 99;

// console.log(obj1.c)
// console.log(obj2.c)

// console.log(obj1.d.x)
// console.log(obj2.d.x)

// console.log(obj1.e === obj2.e)


// const currentTime = Math.floor(Date.now() / 1000); 
// console.log(currentTime);
 
 


// let btn1=document.querySelector("#btn");
// let curmode='dark';
// btn1.addEventListener('click', (e)=>{
//     if(curmode=='light'){
//         document.querySelector("body").style.backgroundColor='black';
//         curmode='dark';
//     }else{
//         document.querySelector("body").style.backgroundColor='white';
//         curmode='light';
//     }
// })


// function reverseString(str) {
//      let str2='';
//         for(let i=str.length-1;i>=0;i--){
//             str2+=str[i];
//         }
//         return str2;
// }
// console.log(reverseString("hello"));  

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); 

// function findMax(arr) {
//     let lar=arr[0];
//      for(let i=1;i<arr.length;i++){
//         if(lar<arr[i]){
//             lar=arr[i];
//         }
//      }
//      return lar;
// }
// console.log(findMax([4, 7, 1, 9, 2])); // Output: 9

// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([4, 7, 1, 9, 2])); // Output: 9


// function isPrime(num) {
//     if(num<2){
//         return false;
//     }
//     let flag=0;
//     for(let i=2;i<=num/2;i++){
//         if(num%i==0){
//            return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));  
// console.log(isPrime(10)); 


// function countVowels(str) {
//     let count=0;
//      for(let i=0;i<str.length;i++){
//         if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//             count++;
//         }
//      }
//      return count;
// }
// console.log(countVowels("javascript"));  

// function findDuplicate(arr){
//     let map={};
//     for(let i in arr){
//         map[arr[i]]=(map[arr[i]] || 0)+1;
//     }
//     let result=[];
//     for(let count in map){
//         if(map[count]>1){
//             result.push(count-'0');
//         }
//     }
//     return result;
// }

// let arr=[4, 3, 2, 7, 8, 2, 3, 1];

// console.log(findDuplicate(arr))

// function firstPosi(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<arr.length){
//         let idx=arr[i]-1;
//             let temp=arr[i];
//             arr[i]=arr[idx];
//             arr[idx]=temp;
//          }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==i+1){
//             return i+1;
//         }
//     }
// }


// let arr=[7,8,9,11, 122];

// console.log(firstPosi(arr));


// function findmissNo(arr){
//     let arr1=new Array(arr.length+1).fill(false);
//     for(let i=0;i<arr.length;i++){
//         arr1[arr[i]]=true;
//     }

//     let result=[];
//     for(let i=1;i<=arr.length;i++){
//         if(!arr1[i])
//             result.push(i);
//     }
//     return result;
// }

// let arr=[4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findmissNo(arr));


// function findmissNo(arr){
//     let num=1;
     
//         if(arr.includes(num)){
//             console.log("present");
//         }
    
// }

// let arr=[4, 3, 2, 7, 8, 2, 3, 1];


// console.log(findmissNo(arr));


