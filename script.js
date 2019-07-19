function colorAll(myColor) {
   var row = document.getElementsByClassName("tdclass");
   for (let i=0; i<row.length; i++)
    row[i].style.backgroundColor = myColor;
}

let myColor;
function colorCollector()
{
    myColor = document.getElementsByClassName("colorDropdown")[0].value;


}