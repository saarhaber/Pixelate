//This targets the button designated to add columns
let addColumnButton = document.querySelector(".addColumnButton")

addColumnButton.addEventListener('click', function(event)
{
	let allrows = document.getElementsByClassName("row");
	if(allrows.length == 0)
	{
    	let tbody = document.querySelector(".mainGrid tbody")
	    let newrow = document.createElement("tr");
		newrow.setAttribute('class', 'row');
		tbody.appendChild(newrow);
		let newcol = document.createElement("td");
		newcol.setAttribute('class', 'column');
		newcol.style.backgroundColor = "grey";
		newrow.appendChild(newcol);	
	}
	else
	{
		for(let step = 0; step < allrows.length; step++)
		{
	        let newcol = document.createElement("td");
			newcol.setAttribute('class', 'column');
			newcol.style.backgroundColor = "grey";
			allrows[step].appendChild(newcol);
		}
	}
})