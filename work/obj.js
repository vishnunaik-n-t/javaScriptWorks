// let obj={
//     name1:"vishnu",
//     class1:11,
//     age:22
// }

// let {name1,cls,age}=obj;

// console.log(name1);
// console.log(cls);
// console.log(age);

// const person={
//     name:"vishnu",
//     age:21,
//     branch:"cse",
//     sec:'c',
//     usn:184
// }


// for(let [persn, field] of Object.entries(person)){
//     console.log(persn+" "+field);
// }

// for(let x in person){
//     console.log(x+" : "+person[x]);
// }

// const myArray=Object.values(person);

// console.log(myArray);


// console.log(Date());

// b=3;
// c=5;
// const d=b+c;


// console.log(d);
// var a = 10;  

// function add() {
//     console.log(a);  
// }

// add();  

// console.log(a);  

// function occOfNestKey(obj, count) {
//     if (typeof obj !== 'object' || obj === null) return count;
//     if (Array.isArray(obj)) return count;
//     for (let ob in obj) {
//         count[ob] = (count[ob] || 0) + 1;  
//         occOfNestKey(obj[ob], count);  
//     }

//     return count;
// }



// const obj = {
//     name: "Alice",
//     details: {
//         age: 25,
//         address: {
//             city: "New York",
//             zip: 10001
//         },
//         hobbies: ["reading", "gaming"]
//     },
//     metadata: {
//         createdAt: "2025-03-26",
//         address: {
//             country: "USA"
//         }
//     }
// };

// console.log(occOfNestKey(obj,{}));

// function flattenObject(obj,arr=[],flat={}){
//     if(typeof obj !== 'object') return obj;

//     for(let key in obj){
//         arr.push(key);
       
//         if(typeof obj[key]==='object')
//             flattenObject(obj[key],arr,flat);
//         else{
//             let res=arr.join(".");
//             flat[res]=obj[key];
//         }
//         arr.pop();
//     }
     

//     return flat;
// }


// const obj = {
//     name: "Alice",
//     details: {
//         age: 25,
//         address: {
//             city: "New York",
//             zip: 10001
//         }
//     },
//     metadata: {
//         createdAt: "2025-03-26"
//     }
// };

// console.log(flattenObject(obj));

// function countOccurrences(obj, count){
//     if(typeof obj!=='object') return obj;

//     for(let key in obj){
//         if(typeof obj[key]==='object'){
//             countOccurrences(obj[key],count)
//         }
//     else{
//         let temp=obj[key];
//         count[temp]=(count[temp] || 0)+1;
//     }
        
//     }

//     return count;
// }


// const obj = {
//     a: "apple",
//     b: {
//         c: "banana",
//         d: {
//             e: "apple",
//             f: "orange"
//         }
//     },
//     g: "banana"
// };


// console.log(countOccurrences(obj,{}));

// function deepMerge(obj1, obj2){
//     for(let ob2 in obj2){
//         if(obj1[ob2]){
//             if(typeof obj2[ob2]==='object' && typeof obj1[ob2]==='object'){
//                 deepMerge(obj1[ob2],obj2[ob2]);
//             }else{
//                 obj1[ob2]=obj2[ob2];
//             }
//         }else{
//             obj1[ob2]=obj2[ob2];
//         }
//     }

//     return obj1;
// }


// const obj1 = {
//     a: 1,
//     b: {
//         x: 10,
//         y: 20
//     },
//     c: 3
// };

// const obj2 = {
//     b: {
//         y: 99,
//         z: 30
//     },
//     c: 4,
//     d: 5
// };


// console.log(deepMerge(obj1, obj2))

function findDeepestKey(obj, depth = 0, result = { maxDepth: 0, key: "" }) {
    if (typeof obj !== 'object' || obj === null) return;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            findDeepestKey(obj[key], depth + 1, result);
        } else {
            if (depth > result.maxDepth) {
                result.maxDepth = depth;
                result.key = key;
            }
        }
    }

    return result.key;
}

const obj = {
    a: 1,
    b: {
        c: {
            d: {
                e: 42
            }
        }
    },
    f: {
        g: {
            h: 10
        }
    }
};

console.log(findDeepestKey(obj)); // Output: "e"

