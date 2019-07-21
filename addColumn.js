let addColumnButton = document.querySelector(".addColumnButton")

addColumnButton.addEventListener('click', function(event)
{
	let allrows = document.getElementsByClassName("row");
	if(allrows.length == 0)
	{
		let table = document.getElementsByClassName("mainGrid");
	    let newrow = document.createElement("tr");
		newrow.setAttribute('class', 'row');
		table[0].appendChild(newrow);
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
			// newcol.addEventListener('mousedown', function(event) {
			// 	event.preventDefault()
			// 	startDrawing(newcol)
			// })
			// newcol.addEventListener('mousemove', function(event) {
			// 	event.preventDefault()
			// 	whileDrawing(newcol)
			// })
			// newcol.addEventListener('mouseup', function(event) {
			// 	event.preventDefault()
			// 	finishDrawing(newcol)
			// })
			allrows[step].appendChild(newcol);
		}
	}
})