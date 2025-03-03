const pipe=(...agrs)=>(value)=>agrs.reduce((acc,fn)=>fn(acc),value);

let add=(x)=>x+2;
let mul=(y)=>y*y;
let sub=(z)=>z-1;

const pipeline=pipe(add,mul,sub);


console.log(pipeline(2));