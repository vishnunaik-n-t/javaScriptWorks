

const init=()=>{
    const btn=document.querySelector("#btn");

btn.addEventListener('click', throttle(clicklog, 2000));
}

const clicklog=()=>console.log("clicked");
document.addEventListener('DOMContentLoaded', init);

const throttle=(fn, delay)=>{
    let lasttime=0;
    return ()=>{
        const now=new Date().getTime();
        console.log(now);
        if(now-lasttime<delay) return;
        lasttime=now;
        fn();
    }
}