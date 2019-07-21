let addColumnButton = document.querySelector(".addColumnButton")

addColumnButton.addEventListener('click', function(event)
{
	let allrows = document.getElementsByClassName("row");
	for(let step = 0; step < allrows.length; step++)
	{
        let newcol = document.createElement("td");
		newcol.setAttribute('class', 'column');
		newcol.style.backgroundColor = "grey";
		allrows[step].appendChild(newcol);
	}
})