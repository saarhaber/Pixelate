let deleteRowButton = document.querySelector(".deleteRowButton")

//deletes the final tr element in tbody
deleteRowButton.onclick = function(event) {
    event.preventDefault()

    //we first target all the tr's in our grid as a node list
    	let list = document.querySelectorAll("tbody tr")

    //we then target the last tr and remove it
    	list[list.length - 1].remove()
}