function addCol()
{
	var allrows = document.getElementsByClassName("row");
	newcol = document.createElement("td");
	newcol.setAttribute('class', 'column');
	for(var step = 0; step < allrows.length; step++)
	{
		allrows[step].appendChild(newcol);
	}

}