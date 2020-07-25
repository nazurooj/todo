function addMe() {
    var list = document.getElementById("list")
    var todo = document.getElementById("item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

    //dlete btn
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","trash")
    delBtn.setAttribute("onclick", "deleteItem(this)")

    //edit btn
    var editBtn=document.createElement("button")
    var editText=document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","edit")
    editBtn.setAttribute("onclick","editBtn(this)") 

    list.appendChild(li)
    todo.value = ""
    console.log(li)
}
function deleteItem(e) {
    e.parentNode.remove()
}
function delAll(){
    list.innerHTML=" "
}
function editBtn(e){
    var val=prompt ("Edit your text ", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}

