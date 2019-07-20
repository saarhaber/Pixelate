let deleteColButton = document.querySelector(".deleteColumnButton")

deleteColButton.onclick = function(event) {
    event.preventDefault()
    let allrows = document.querySelectorAll("tbody tr")
    for(var step = 0; step < allrows.length; step++)
    {
    	var findCol = allrows[step].lastElementChild;
    	allrows[step].removeChild(findCol);
    }
};