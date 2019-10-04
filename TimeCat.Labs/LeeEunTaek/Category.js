
window.onload = function(){
    // All Varibales
    var buttonAddText = document.getElementById('send');
    var inputValue = document.getElementById('inputAdd');
    var myList = document.getElementById('list');

    // When click buttonAddText Add text to li
    buttonAddText.addEventListener("click", function(){
        var myNewValue = inputValue.value;
            if(myNewValue === ""){
                alert("Input is empty");
            } else {
            //Here will create li Tag
            var newLi = document.createElement('li');
            var elementNew = myList.appendChild(newLi);
            elementNew.innerHTML = myNewValue + "<span onclick='myFunc(this)' class='delete fa fa-trash-o'></span>";
         
            inputValue.value = "";
        }
    });
}

// Remove li from list
function myFunc(elem){
    var li = elem.parentNode;
    li.parentNode.removeChild(li);
}