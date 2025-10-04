var inputBox = document.getElementById("input-box")
var listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value.trim().length < 1) {
        alert("You must write something!");
    }else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        button = document.createElement("button");
        button.innerHTML = "Edit";
        button.className = "editbtn"
        li.appendChild(button);

    }
    inputBox.value = ""; 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "BUTTON") {
        var editText = prompt("Edit Task here");
        e.target.parentElement.innerText = editText;
      
    }
}, false);

