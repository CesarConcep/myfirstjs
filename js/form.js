
$("#btn").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","mails");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});


function bind_close(){
    let elements=document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        elements[i].addEventListener("click",function(){
            this.parentNode.style.display="none";
        });
    }
}

function myAlert(msg){
    console.log($("body").children[1]);
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    var close = document.createElement("span");
    close.style.float = "right";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}

function $(selector){
    return document.querySelector(selector);
}