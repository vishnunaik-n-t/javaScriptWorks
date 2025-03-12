// const mul=(num1, num2)=>{
//     return num1*num2;
// }

// console.log(mul(3,5));


// const reverse1=(name)=>{

//     let arr=name.split('');

//     for(let i=0,j=name.length-1;i<j;i++,j--){
//          let temp=arr[i];
//          arr[i]=arr[j];
//          arr[j]=temp;
//     }
//     return arr.join('');
    
// }

// let Name="vishnu";
// Name=reverse1(Name);

// console.log(Name)


// let arr=[1,2,3,4,5,6,7,8,9];

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i].join(''));
// }
// console.log(arr.join(','));


// let arr=["vishnu","suchi","panda","sachin","pari"];

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i].split('').reverse().join('');
// }

// console.log(arr.join(' '));

// let evOrad=(num)=>{
//     if(num%2==0){
//         console.log("Even");
//     }else{
//         console.log("Add");
//     }
// }

// evOrad(98);

// let arr=[true,false,true,false,false,true,true,true,false,true,true];
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]) count++;
// }

// console.log(count);


// const check=(num)=>{
//     let x=3,y=2;
//     if(num%x==0 && num%y==0){
//         console.log("yes it is man");
//     }else{
//         console.log("nop");
//     }
// }


// check(6);

// const check=(num)=>{
//     return num*-1;
// }
// console.log(check(10));

// const findsmall=(arr)=>{
//     return Math.min(...arr);
// }

// let arr=[33,566,121,34,77,35];
// console.log(findsmall(arr));


// const avg=(arr)=>{
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return Math.round(sum%2==0?sum/arr.length:sum/arr.length+1);
// }

// let arr=[1,2,3,4,5,6,8];

// console.log(avg(arr));


// const substr=(str)=>{
//     return str.substr(1,str.length-2);
// }

// console.log(substr("vishnu"));
// const repeatStr=(a,b)=>{
//     // let str="";
//     // for(i=0;i<b;i++){
//     //     str+=a;
//     // }
//     return a.repeat(b);
// }

// console.log(repeatStr('Vishnu',5));

// const strToArray=(str)=>{
//     return str.split(" ").join("");
// }

// console.log(strToArray("i love to play free fire"));

// const duoble=(arr)=>{
//      return arr.map((item)=>item*2);
// }

// let arr=[1,2,3];
// console.log(duoble(arr));

// console.log(Math.ceil(3/2));