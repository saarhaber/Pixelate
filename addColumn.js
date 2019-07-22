//This targets the button designated to add columns
let addColumnButton = document.querySelector(".addColumnButton")

//This addColumnButton will add a column to the mainGrid, if there is no column present, it'll create a column of size 1 and a row of size 1
addColumnButton.addEventListener('click', function(event)
{
	let allrows = document.getElementsByClassName("row");
	if(allrows.length == 0)
	{
		//New element tr is created if there are no rows, td is created, td gets appended to tr.
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
		//If there are rows, each row is appended a td child.
		for(let step = 0; step < allrows.length; step++)
		{
	        let newcol = document.createElement("td");
			newcol.setAttribute('class', 'column');
			newcol.style.backgroundColor = "grey";
			allrows[step].appendChild(newcol);
		}
	}
})