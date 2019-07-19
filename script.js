
function addCol()
{
	var allrows = document.getElementsByClassName("row");
	newcol = document.createElement("td");
	newcol.setAttribute('class', 'column');
	for(var step = 0; step < allrows.length; step++)
	{
		allrows[step].appendChild(newcol);
	}
function colorAll(myColor) {
   var row = document.getElementsByClassName("column");
   for (let i=0; i<row.length; i++)
    row[i].style.backgroundColor = myColor;
}
let myColor;
function colorCollector()
{
    myColor = document.getElementsByClassName("colorDropdown")[0].value;
}