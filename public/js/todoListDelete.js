window.addEventListener('DOMContentLoaded', () => {
    deleteTodo();
})

function deleteTodo() {
    const btnDelete = document.getElementsByClassName('btnDelete');
    for (let i = 0; i < btnDelete.length; i++) {
        let currentBtn = btnDelete[i]
        currentBtn.addEventListener('click', ($event) => {
            let todoId = $event.target.getAttribute('todoid');
            axios.delete('/delete/' + todoId)
                .then(function (response) {
                    document.location.href = '/'
                    deleteTodo()
                })
                .catch(function (err) { console.log(err) });
        })
    }



}