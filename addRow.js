let addRowButton = document.querySelector(".addRowButton")

let addRowFunction = () => {
    let tbody = document.querySelector(".mainGrid tbody")
    let tr = document.querySelectorAll(".row")


    //Code to check to see if there are no rows. If there are no rows, it'll create a new row with 1 column.
    if(tr.length == 0)
    {
        let newrow = document.createElement("tr");
        newrow.setAttribute('class', 'row');
        tbody.appendChild(newrow);
        let newcol = document.createElement("td");
        newcol.setAttribute('class', 'column');
        newcol.style.backgroundColor = "grey";
        newrow.appendChild(newcol);    
    }
    //End of Code to check to see if there are no rows...


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