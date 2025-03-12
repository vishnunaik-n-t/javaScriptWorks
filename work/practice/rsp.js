const rsp=(p1,p2)=>{
    if(p1==p2) return "Draw";
    const result={r:'p', s:'r', p:'s'};
    if(result[p1]===p2){
            return "player 2 won";
    }else{
        return "player 1 won";
    }
}

console.log(rsp('p','s'));