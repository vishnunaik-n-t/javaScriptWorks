// 🧐🧐🧐🧐🧐🧐🧐🧐🧐how to use async await its syntax


// async function fetchDataWithDelay(id, delay){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(`Data for id: ${id}`);
//     },delay);
//   });
// }

// async function main(){
//   console.log("fetching data....");
//   const data=await fetchDataWithDelay(1,2000);
//   console.log(data);
// }

// main();



// function returnAfter2sec(){
//   return new Promise((res)=>{
//     setTimeout(()=>{ 
//       res("Hello, Vishnu!");
//     }, 2000);
//   });
// }

// (async function callaboveFunc(){
//   const result=await returnAfter2sec();
//   console.log("first");
//   console.log(result);
// })();
// console.log("second");


 // 🧐🧐🧐🧐🧐🧐🧐🧐🧐🧐how to fetch data from API and how to handle them

// (async function fetchingData(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
//     const data=await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error fetching data");
//   } 
// })();


(async function fetchdataFrom2API(){
  try{
    const api1="https://jsonplaceholder.typicode.com/todos/1";
    const api2="https://jsonplaceholder.typicode.com/users/1";
    const response=await Promise.all([fetch(api1), fetch(api2)]);
    const data=await Promise.all(response.map(res=>res.json()));
    console.log(data);
  }catch(error){
    console.log("some Error accured : "+error);
  }
}
)();







