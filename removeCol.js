let deleteColButton = document.querySelector(".deleteColumnButton")

//Function will remove a column
deleteColButton.onclick = function(event) {
    event.preventDefault()
    let allrows = document.querySelectorAll("tbody tr")
    //Removes td from each tr
    for(var step = 0; step < allrows.length; step++)
    {
    	var findCol = allrows[step].lastElementChild;
    	allrows[step].removeChild(findCol);
    }
};