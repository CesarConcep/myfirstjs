function pressFunction() {
    console.log("sfdfj");
    // DOM
    var div = document.getElementById("div_magic");
    div.classList.add("my_class");
    console.log(div);
    var div2 = document.getElementsByTagName("div");
    console.log(div2);

    var second_div = document.querySelector("#second_div");
    console.log(second_div);

    console.log($("#third_div"));
}

function mouseOverFunction() {
    console.log("adfsdfs");
}

function $(selector){
    return document.querySelectorAll(selector);
}

