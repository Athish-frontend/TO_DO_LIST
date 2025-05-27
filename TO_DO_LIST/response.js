const inputBox=document.getElementById("input_box");
const list=document.getElementById("listcontainer");
function task(){
    if(inputBox.value === ''){
        alert("you should write");

    }else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    save();
}
list.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");

    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();