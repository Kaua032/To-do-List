let btnAdd = document.getElementById("btn-add")
let inputAdd = document.getElementById("input-to-do")
let listToDo = document.getElementById("to-do")

let tasks = new Object()

if(localStorage.getItem("keys") < 1){
    localStorage.setItem("keys", 1)
}

function Write(){
    listToDo.innerHTML = ""
    let j = 1
    for(let i = 1; i <= localStorage.getItem("keys"); i++){
        if(localStorage.getItem(i)){
            listToDo.innerHTML += `
            <div class="card-task" >
                <div class="color-to-do" id="bgColor-${i}"></div>
                <input id="${i}" class="checkbox-${i}" onclick="Done(this.id)" type="checkbox">
                <p>${j} - <p id="paragraf-${i}">${localStorage.getItem(i)}</p></p>
                <button onclick="Remove(this.id)" id="${i}"><img src="./icons/excluir.png" alt=""></button>
            </div>
            `
            j++
        }
    }
}
Write()

btnAdd.addEventListener("click", () =>{
    if(inputAdd.value){
        listToDo.innerHTML = ""
        localStorage.setItem(localStorage.getItem("keys"), inputAdd.value)
        let j = 1
        for(let i = 1; i <= localStorage.getItem("keys"); i++){
            if(localStorage.getItem(i)){
                listToDo.innerHTML += `
                <div class="card-task" >
                    <div class="color-to-do" id="bgColor-${i}"></div>
                    <input id="${i}" class="checkbox-${i}" onclick="Done(this.id)" type="checkbox">
                    <p>${j} - <p id="paragraf-${i}">${localStorage.getItem(i)}</p></p>
                    <button onclick="Remove(this.id)" id="${i}"><img src="./icons/excluir.png" alt=""></button>
                </div>
                `
                j++
            }
        }
    }
    inputAdd.value = ""
    localStorage.setItem("keys", parseInt(localStorage.getItem("keys")) + 1)
})

function Remove(id){
    id = parseInt(id)
    localStorage.removeItem(id)
    Write()
}

function Done(id){
    let cardDone = document.getElementById(`paragraf-${id}`)
    let checkBox = document.getElementsByClassName(`checkbox-${id}`)[0]
    let BgcolorLeft = document.getElementById(`bgColor-${id}`)
    if(checkBox.checked){
        cardDone.style.textDecoration = "line-through"
        BgcolorLeft.style.backgroundColor = "green"
    }
    else{
        cardDone.style.textDecoration = "none"
        BgcolorLeft.style.backgroundColor = "red"
    }
}