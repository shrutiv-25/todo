//declaring variables
var input = document.getElementById("inputx");
var btn = document.getElementById("btnx");
var list = document.getElementById("listx");
//adding button and input eventlisteners
btn.addEventListener("click", addItemv1);
input.addEventListener("keypress", addItemv2);
//button listener function
function addItemv1() {
    if (input.value == "") {
        alert("Enter your task!");
    }
    else {
        var element = document.createElement("li");
        element.appendChild(document.createTextNode(input.value));
        list.appendChild(element);
        var new_btn = document.createElement("button");
        new_btn.appendChild(document.createTextNode("remove"));
        list.appendChild(new_btn);
        input.value = "";
        new_btn.style.color = "black";
        new_btn.style.borderColor = "black";
        new_btn.style.fontSize = "16px";
        new_btn.style.borderRadius = "5px";
        new_btn.addEventListener("click", removeItem);
        function removeItem() {
            element.style.display = "none";
            new_btn.style.display = "none";
        }
    }
}
//input listener function
function addItemv2(event) {
    if (event.keyCode == 13) {
        if (input.value == "") {
            alert("Enter your task!");
        }
        else {
            var element = document.createElement("li");
            element.appendChild(document.createTextNode(input.value));
            list.appendChild(element);
            var new_btn = document.createElement("button");
            new_btn.appendChild(document.createTextNode("remove"));
            list.appendChild(new_btn);
            input.value = "";
            new_btn.style.color = "black";
            new_btn.style.borderColor = "black";
            new_btn.style.fontSize = "16px";
            new_btn.style.borderRadius = "15px";
            new_btn.addEventListener("click", removeItem);
            function removeItem() {
                element.style.display = "none";
                new_btn.style.display = "none";
            }
        }
    }
}
