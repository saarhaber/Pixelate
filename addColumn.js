let addColumnButton = document.querySelector(".addColumnButton")

//Napat's function refactored here
addColumnButton.addEventListener('click', function(event)
{
	let allrows = document.getElementsByClassName("row");
	for(let step = 0; step < allrows.length; step++)
	{
        let newcol = document.createElement("td");
	    newcol.setAttribute('class', 'column');
		allrows[step].appendChild(newcol);
	}
})