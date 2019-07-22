let addRowButton = document.querySelector(".addRowButton")

let addRowFunction = () => {
    //targets tbody element which houses all tr elements
        //we target this because we want to add a new tr element to it's end, as the new row
        let tbody = document.querySelector(".mainGrid tbody")

    //targets every single tr element and returns as a list.
        //we do this because it allows us to modify the rows as a list.
        //meaning we can choose indexes. We cant choose indexes when targeting tbody
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

    //one way to do this:
        //I basically target the contents of the last item (last tr) in the tr list
        //Then I make a copy as a string.
        //the resulting string is pretty much an exact copy of a typical tr element
        let tr_html = "<tr class=\"row\">" + tr[tr.length - 1].innerHTML + "</tr>"

    //We then add that string to tbody's inner html. tbody, and our grid, now has
        //a new row
        tbody.innerHTML += tr_html
    
    //we target the new, last, row/child we just made...
        let td_list = document.querySelectorAll(".mainGrid tr:last-child td")
        for (let index = 0; index < td_list.length; index++) {
            //...and we set it's color to grey, the default
            td_list[index].style.backgroundColor = "grey"
        }
}

//we simply add the addRowFunction as a click event for our addRowButton
    addRowButton.onclick = function(event) {
        addRowFunction()
    }