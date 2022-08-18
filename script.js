var btn = document.getElementById("sbtn");
var input = document.getElementById("ip");
var container = document.getElementById("tasks");
btn.addEventListener('click',function() {
    var value = input.value;
    var text = document.createElement("p");
    text.innerText = value;
    if (!value){
        window.alert("Enter Your Task")
        return 
    }
    container.appendChild(text);
    input.value = ""

    var delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    container.append(delBtn);


    var compBtn = document.createElement("button");
    compBtn.innerText = "done";
    container.appendChild(compBtn);

    compBtn.addEventListener('click',function() {
        text.style.textDecoration = "line-through";
    })
    delBtn.addEventListener('click',function() {
        container.removeChild(delBtn);
        container.removeChild(text);
        container.removeChild(compBtn);
    })
})