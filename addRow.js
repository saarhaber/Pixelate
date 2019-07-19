let addRowButton = document.querySelector(".addRowButton")

let addRowFunction = () => {
    let tbody = document.querySelector(".mainGrid tbody")
    console.log(tbody);
    let tr = document.querySelectorAll(".row")
    let tr_html = "<tr class=\"row\">" + tr[tr.length - 1].innerHTML + "</tr>"
    tbody.innerHTML += tr_html
    
    let td_list = document.querySelectorAll(".mainGrid tr:last-child td")
    for (let index = 0; index < td_list.length; index++) {
        td_list[index].style.backgroundColor = "grey"
    }
}

addRowButton.onclick = function(event) {
    console.log("clicked addRowButton")
    addRowFunction()
}