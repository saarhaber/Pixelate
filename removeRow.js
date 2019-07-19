let deleteRowButton = document.querySelector(".deleteRowButton")

deleteRowButton.onclick = function(event) {
    event.preventDefault()
    let list = document.querySelectorAll("tbody tr")
    list[list.length - 1].remove()
}