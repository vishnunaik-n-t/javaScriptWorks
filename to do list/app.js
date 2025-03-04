function add_item(){
   let item= document.getElementById("box");
    let list_item=document.getElementById("list-item");
    if(item.value != ""){
        let make_it=document.createElement("li");
        make_it.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_it);
        document.getElementById("list_item");
        item.value="";

        make_it.onclick=function(){
            this.parentNode.removeChild(this);
        }
    }
    else{
        alert("please add item to list");
    }
}