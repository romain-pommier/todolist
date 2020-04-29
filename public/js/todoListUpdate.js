window.addEventListener('DOMContentLoaded', () => {
    updateTodo();
})

function updateTodo() {
    const btnUpdate = document.getElementsByClassName('btnUpdate');
    for (let i = 0; i < btnUpdate.length; i++) {
        let currentBtn = btnUpdate[i]
        currentBtn.addEventListener('click', ($event) => {
            document.getElementsByClassName('btnUpdate')[i].setAttribute("style", "display: none")
            document.getElementsByClassName('btnDelete')[i].setAttribute("style", "display: none")
            document.getElementsByClassName('title')[i].setAttribute("style", "display:none")
            document.getElementsByClassName('formUpdate')[i].setAttribute("style", "display:block")
        })
    }
}