let input = document.getElementById("inputin")
let display = document.getElementById("displaying")
// Adding the content
function adding23(){
    let inputvalue = input.value
    let h2 = document.createElement("h2")
    h2.textContent = inputvalue
    h2.setAttribute("id","delete")
    display.appendChild(h2)
    input.value = ""
    input.focus()
}
//deleting content
function deleting(){
    let removing = document.getElementById("delete")
    removing.remove()
}

