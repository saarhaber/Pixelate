let addRowButton = document.querySelector(".addRowButton")

let addRowFunction = () => {
    let tbody = document.querySelector(".mainGrid tbody")
    let tr = document.querySelectorAll(".row")

    let tr_html = "<tr class=\"row\">" + tr[tr.length - 1].innerHTML + "</tr>"
    tbody.innerHTML += tr_html
    
    let td_list = document.querySelectorAll(".mainGrid tr:last-child td")
    for (let index = 0; index < td_list.length; index++) {
        td_list[index].style.backgroundColor = "grey"
        // td_list[index].addEventListener('mousedown', function(event) {
        //     event.preventDefault()
        //     startDrawing(td_list[index])
        // })
        // td_list[index].addEventListener('mousemove', function(event) {
        //     event.preventDefault()
        //     whileDrawing(td_list[index])
        // })
        // td_list[index].addEventListener('mouseup', function(event) {
        //     event.preventDefault()
        //     finishDrawing(td_list[index])
        // })
    }
}

addRowButton.onclick = function(event) {
    console.log("clicked addRowButton")
    addRowFunction()
}