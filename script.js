
//colors all td elements to the current value of the color-select element
function colorAll(myColor) {
    //update myColor to the latest color-select
        myColor = document.getElementsByClassName("colorDropdown")[0].value;
    //nice little effect where we change the title to this color
        document.getElementsByTagName("h1")[0].style.color = myColor;
        var row = document.getElementsByClassName("column");
        for (let i=0; i<row.length; i++)
            row[i].style.backgroundColor = myColor;
}

let myColor = "grey";

//updates myColor to latest color from color-select element
function colorCollector()
{
    myColor = document.getElementsByClassName("colorDropdown")[0].value;
}

//Targets those td elements with 'grey' or empty string as background color
//and turns them to latest myColor
function colorRemain() {
    myColor = document.getElementsByClassName("colorDropdown")[0].value;
    let row = document.getElementsByClassName("column");
    for (let i=0; i<row.length; i++)
    { let element = row[i];
        //checks if grey or empty
        if ((element.style.backgroundColor == "grey") || (element.style.backgroundColor == "")) {
            element.style.backgroundColor = myColor;
        }
    }
}


function colorReset() {
    let row = document.getElementsByClassName("column");
    for (let i=0; i<row.length; i++)
    { let element = row[i];
      element.style.backgroundColor = "grey";
    } 
    document.getElementsByTagName("h1")[0].style.color = "white";
}



let isDrawing = false;
const cells = document.getElementsByTagName("td");
document.onmousemove = function(){
    beginDraw();
};
let beginDraw = () => {
    for (let cell of cells) {
        cell.addEventListener('mousedown', event => {
            myColor = document.getElementsByClassName("colorDropdown")[0].value;
            isDrawing = true;
            cell.style.backgroundColor = myColor
        });

        cell.addEventListener('mousemove', event => {
            if (isDrawing) {
                cell.style.backgroundColor = myColor
            }
        });

        cell.addEventListener('mouseup', event => {
            if (isDrawing) {
                isDrawing = false;
            }
        });
    }
}