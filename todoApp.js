
    var listToDo = document.getElementById("todoList");
    function addTodo() {
        var content = document.getElementById("iData").value;
        if (content == "") {
            alert("Enter ToDo First here...");
        } else {
            var _li = document.createElement("li");
            var liText = document.createTextNode(content);

            //Delete Button
            var buttonDelete = document.createElement("button");
            var buttonDeleteText = document.createTextNode("Delete");
            buttonDelete.appendChild(buttonDeleteText);
            buttonDelete.setAttribute("onClick", "del(this)");


            //Edit Button
            var buttonEdit = document.createElement("button");
            var buttonEditText = document.createTextNode("Edit");
            buttonEdit.appendChild(buttonEditText);
            buttonEdit.setAttribute("onClick", "edit(this)");


            _li.appendChild(liText);
            _li.appendChild(buttonEdit);
            _li.appendChild(buttonDelete);
            console.log(_li);
            listToDo.appendChild(_li);

            document.getElementById("iData").value = "";
        }
    }
    function del(a) {
        a.parentNode.remove()
    }
    function edit(a) {
        // console.log(a);
        var editItem = prompt("Please write value first then proceed...", a.parentNode.firstChild.nodeValue);
        a.parentNode.firstChild.nodeValue = editItem;
    }

    function deleteAll() {
        listToDo.innerHTML = "";
    }
