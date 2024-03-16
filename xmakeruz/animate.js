//-----------------------------------------------control buttons
let siteName = "xmaker.uz";
let addBtn = document.getElementById("addBtn");
let textBtn = document.getElementById("textBtn");

let controlBtns = document.querySelectorAll(".controlBtns");

addBtn.classList.add("btnActive"); //default

//-----------------------------------------------control buttons

document.getElementById("screenoff").addEventListener('click', function(event) {
    event.preventDefault();
    // Your custom logic here
});

let mainBox = document.getElementById("mainBox");

// creating squares
let itsListNumVal = 0;
for (let i = 0; i < 500; i++) {

    let madeBoxes = document.createElement("div");
    itsListNumVal++;
    madeBoxes.setAttribute("itslistnum", itsListNumVal);
    madeBoxes.itslistnum = itsListNumVal;
    madeBoxes.classList.add("boxes");
    mainBox.appendChild(madeBoxes);

};

//------------------------------------------------colors

let indexzNum = 1;

let theBlack = "#000";
let theGreen = "#00F227";
let theBlue = "#629FFF";
let theOrange = "#FFA800";
let theRed = "#FF0000";

let  colorControlBox = document.getElementById("colorControlBox");
let boxes = document.querySelectorAll(".boxes");

//for border color
let bordercolors = document.querySelectorAll(".bordercolors");
let blackBorderColor = document.getElementById("blackBorderColor");
let greenBorderColor = document.getElementById("greenBorderColor");
let blueBorderColor = document.getElementById("blueBorderColor");
let orangeBorderColor = document.getElementById("orangeBorderColor");
let redBorderColor = document.getElementById("redBorderColor");

blackBorderColor.classList.add("btnColorActive"); //default
blackBorderColor.isSelected = true;
greenBorderColor.isSelected = false;
blueBorderColor.isSelected = false;
orangeBorderColor.isSelected = false;
redBorderColor.isSelected = false;
let borderColorjs = theBlack;

for (let bordercolor of bordercolors) {
    bordercolor.addEventListener("click",  ()=> {
        bordercolors.forEach( element =>{
            element.classList.remove("btnColorActive");
            element.isSelected = false;
        });
        bordercolor.classList.add("btnColorActive");
        bordercolor.isSelected = true;
        changeBorderColor();
    });
};

//for text color
let textcolors = document.querySelectorAll(".textcolors");
let blackTextColor = document.getElementById("blackTextColor");
let greenTextColor = document.getElementById("greenTextColor");
let blueTextColor = document.getElementById("blueTextColor");
let orangeTextColor = document.getElementById("orangeTextColor");
let redTextColor = document.getElementById("redTextColor");

blackTextColor.classList.add("btnColorActive"); //default
blackTextColor.isSelected = true;
greenTextColor.isSelected = false;
blueTextColor.isSelected = false;
orangeTextColor.isSelected = false;
redTextColor.isSelected = false;

let textColorjs = theBlack;

for (let textcolor of textcolors) {
    textcolor.addEventListener("click",  ()=> {
        textcolors.forEach( element =>{
            element.classList.remove("btnColorActive");
            element.isSelected = false;
        });
        textcolor.classList.add("btnColorActive");
        textcolor.isSelected = true;
        boxes.forEach(element => {
            if (element.textHoverClicked) {
                changeTextColor();
                element.style.color = textColorjs;
            };
        });
    });

};

//responsive color box
let colorBtn = document.getElementById("colorBtn");

function myFunction(x) {
    if (x.matches) { // If media query matches
            colorControlBox.style.display = "none";
            
            colorBtn.addEventListener("click", () => {
            colorControlBox.style.display = "block";
            colorControlBox.classList.add("colorControlBoxRes");
            document.getElementById("backBtn").style.display = "block";
        });
      
    } else {
        colorControlBox.style.display = "flex";
        document.getElementById("backBtn").style.display = "none"
        colorControlBox.classList.remove("colorControlBoxRes");
    };
};

//-----------------------------------------------------------------------------colors

//------------------------------------------------------------round changing

let roundNum = document.getElementById("roundNum");
roundNum.max = 100;

roundNum.addEventListener("input", ()=>{
    boxes.forEach(element => {
        element.style.borderRadius = roundNum.value/100*(parseInt(window.getComputedStyle(element).width, 10)/2) + "px";
    });
});

//------------------------------------------------------------round changing

//---------------------------------------------------responsive part

  // Create a MediaQueryList object
  let x = window.matchMedia("(max-width: 950px)");
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
    });
document.getElementById("backBtn").onclick = () => {
    colorControlBox.style.display = "none";
    document.getElementById("backBtn").style.display = "none";
};

//---------------------------------------------------responsive part

//--------------------------------------------detecting which color is clicked

function changeBorderColor() {

    if(blackBorderColor.isSelected){
        borderColorjs = theBlack;
    } else if(greenBorderColor.isSelected){
        borderColorjs = theGreen;
    } else if (blueBorderColor.isSelected) {
        borderColorjs = theBlue;
    } else if(orangeBorderColor.isSelected){
        borderColorjs = theOrange
    } else if (redBorderColor.isSelected) {
        borderColorjs = theRed;
    };

};

function changeTextColor() {

    if(blackTextColor.isSelected){
        textColorjs = theBlack;
    } else if(greenTextColor.isSelected){
        textColorjs = theGreen;
    } else if (blueTextColor.isSelected) {
        textColorjs = theBlue;
    } else if(orangeTextColor.isSelected){
        textColorjs = theOrange
    } else if (redTextColor.isSelected) {
        textColorjs = theRed;
    }

};

//--------------------------------------------detecting which color is clicked

//------------------------------------------------control buttons
addBtn.isSelected = true; // default selected
textBtn.isSelected = false;

 for (let abox of boxes) {

    abox.setAttribute('isclicked', "false");
    abox.setAttribute("textHoverCliked", "false");
    abox.isclicked = false;
    abox.textHoverClicked = false;

};

//-----for add square control button
boxes.forEach(div => {

    div.addEventListener('mousedown', ()=> handleButtonClick(event) );
    div.addEventListener('mouseover', ()=> handleMouseOver(event) );

});

addBtn.addEventListener("mousedown", uwu);

function uwu() {
    screenoff.readOnly = true;

    boxes.forEach(element => {
        element.textHoverClicked = false;
    });

    if (!addBtn.isSelected) {
        boxes.forEach(element => {
            element.textHoverClicked = false;
        });
        befSit(addBtn);
        addBtn.isSelected = true;
        textBtn.isSelected = false;
    };
}
//-----for add square control button

textBtn.addEventListener("mousedown", blabla);

function blabla() {
    screenoff.readOnly = false;

    if (!textBtn.isSelected) {
        befSit(textBtn);
        textBtn.isSelected = true;
        addBtn.isSelected = false;
        textBtnClicked()
    };
}

// control button click effect

function befSit(param) {
    controlBtns.forEach( element =>{
        element.classList.remove("btnActive");
    });
    param.classList.add("btnActive");
};

// control button click effect

//--------------------------------------------control buttons

//--------------------------------------------addBtn
let hoveredDiv;
function handleMouseOver(event) {
    if (event.buttons === 1 && addBtn.isSelected) {  // Check if left mouse button is held down
        hoveredDiv = event.target;
        indexzNum++;
        hoveredDiv.style.zIndex = indexzNum;
        hoveredDiv.isclicked = true;
        changeBorderColor();
        hoveredDiv.style.border = `3px solid ${borderColorjs}`
    };
};
    
function handleButtonClick(event) {
    let clickedDiv;   /// start here
    clickedDiv = event.target;
    if (!clickedDiv.isclicked && addBtn.isSelected) {
        indexzNum++;
        clickedDiv.style.zIndex = indexzNum;
        clickedDiv.isclicked = true;
        changeBorderColor();
        clickedDiv.style.border = `3px solid ${borderColorjs}`;
    } else if(clickedDiv.isclicked && addBtn.isSelected) {
        clickedDiv.style.zIndex = 0;
        clickedDiv.style.border = `3px solid rgb(240, 240, 240)`;
        clickedDiv.isclicked = false;
    };
};

//--------------------------------------------------addBtn 

//--------------------------------------------------textBtn
let screenoff = document.getElementById("screenoff");
function textBtnClicked() {
    for (const aboxfrw of boxes) {

        aboxfrw.onclick = () => {
            let topScreenoff;
            let leftScreenoff;
            
                if (aboxfrw.itslistnum % 25 === 0) {
                    topScreenoff = Math.floor(aboxfrw.itslistnum/25 - 1) * 47
                } else {
                    topScreenoff = Math.floor(aboxfrw.itslistnum / 25) * 47
                }

                if (aboxfrw.itslistnum % 25 === 0) {
                    leftScreenoff = 24 * 47
                } else {
                    leftScreenoff = ( aboxfrw.itslistnum % 25 - 1 ) * 47
                }
                

            screenoff.style.top = topScreenoff + 10 + 'px'
            screenoff.style.left = leftScreenoff + "px"
            screenoff.focus();
            screenoff.value = "";

            boxes.forEach(element => {
                element.textHoverClicked = false;
            });
            
            aboxfrw.textHoverClicked = true;
            roundNum.addEventListener('focus', ()=> {
                // This function will be called whenever the user types something
                aboxfrw.textHoverClicked = false;
              });
              
            screenoff.addEventListener("input", ()=> {
                
                if (aboxfrw.textHoverClicked) {
                    aboxfrw.innerHTML = [...screenoff.value].at(-1);
                };
            });

            document.addEventListener("keydown", (event)=>{
                if (event.keyCode === 8 && aboxfrw.textHoverClicked) {
                    screenoff.value = "";
                    aboxfrw.innerHTML = "";
                };
            });

            changeTextColor();
            aboxfrw.style.color = textColorjs;
        };
    };
};
//--------------------------------------------------textBtn
//---------------------------------------------------------click animation
animateBox();
function animateBox() {
    boxes.forEach(element => {
        element.addEventListener("mousedown", ()=> {
            element.classList.add("clickAnimation");
    
            setInterval(() => {
                element.classList.remove("clickAnimation");
            }, 45);
        });
    });
};


//----------------------------------------------show button--------------------------
let showBtn = document.getElementById("showBtn");
let showResDiv = document.getElementById("showResDiv");
let defWidth = 47;
let defHeight = 47;

let horizontalBoxNumsArray= [];
let verticalBoxMaxNumsArray = [];
let howManyRow = 25;
let howManyColumn = 20;


let horizontalBoxNums;
let rightBoxMaxNumIs;
let leftBoxMinNumIs;


let verticalBoxNums;
let topBoxMinNumIs;
let bottomBoxMaxNumIs;

let xmaker = document.getElementById("xmaker");
let addHeight;
let addHeightPuzzle;
showBtn.onclick = () => {
    dowpng()
    captureSpecificPart();

}

function dowpng() {
    horizontalBoxNumsArray = []; //making empty bcz if user click multiple times
    verticalBoxMaxNumsArray = []; //making empty bcz if user click multiple times

    boxes.forEach(element => {
        if ((element.innerHTML !== "" || (window.getComputedStyle(element).borderColor !== "rgb(240, 240, 240)")) && element.itslistnum) { //taking squared or written box

            horizontalBoxNums = (element.itslistnum) % howManyRow; // calculate remainder left number 13/5 => 3
            if (horizontalBoxNums === 0) {
                horizontalBoxNums = howManyRow;
            }
            horizontalBoxNumsArray.push(horizontalBoxNums);
            
            if (element.itslistnum % howManyRow == 0 && (Math.floor(element.itslistnum / howManyRow)) % howManyColumn == 0) {
                verticalBoxNums = howManyColumn;
            } else if (element.itslistnum % howManyRow == 0) {
                verticalBoxNums = (Math.floor(element.itslistnum / howManyRow)) % howManyColumn;
            } else{
                if ((Math.floor(element.itslistnum / howManyRow) + 1) % howManyColumn == 0) {
                    verticalBoxNums = howManyColumn;
                } else{
                    verticalBoxNums = (Math.floor(element.itslistnum / howManyRow) + 1) % howManyColumn
                }
            }

            verticalBoxMaxNumsArray.push(verticalBoxNums);

        };
        
    });


    let finalQuesAddToPage = document.getElementById("finalQuesAddToPage");
    if (document.getElementById("addQuesTxt").value !== "") {
        finalQuesAddToPage.innerText = document.getElementById("addQuesTxt").value;
        indexzNum++
        finalQuesAddToPage.style.zIndex = indexzNum;
        finalQuesAddToPage.style.opacity = "1";
    } else {
        finalQuesAddToPage.style.width = 0;
        finalQuesAddToPage.style.height = 0;
    }



    rightBoxMaxNumIs = Math.max(...horizontalBoxNumsArray); //max number horizotral
    leftBoxMinNumIs = Math.min(...horizontalBoxNumsArray); //min number horizpntal

    topBoxMinNumIs = Math.min(...verticalBoxMaxNumsArray); //min number horizotral
    bottomBoxMaxNumIs = Math.max(...verticalBoxMaxNumsArray) //max number vertical

    showResDiv.style.marginLeft = (leftBoxMinNumIs - 1.5) * defWidth - 3 + "px";
    showResDiv.style.marginTop = (topBoxMinNumIs-1.5) * defHeight - 3 + "px";
    
    showResDiv.style.width = (rightBoxMaxNumIs - leftBoxMinNumIs + 2) * defWidth + 6 + (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).width, 10)) + "px";
    if ((bottomBoxMaxNumIs - topBoxMinNumIs + 2) * defHeight + 6 > (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).height, 10))) {
        addHeight = 0;
        addHeightPuzzle = (bottomBoxMaxNumIs - topBoxMinNumIs + 2) * defHeight + 6;
    } else {
        addHeight = (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).height, 10)) + 10;
        addHeightPuzzle = 0;
    }
    showResDiv.style.height = addHeightPuzzle + addHeight + "px";
    
    finalQuesAddToPage.style.left = (leftBoxMinNumIs - 1.5) * defWidth - 3 + (parseInt(window.getComputedStyle(showResDiv).width, 10)) - (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).width, 10)) + "px";
    finalQuesAddToPage.style.top = (topBoxMinNumIs-1.5) * defHeight + 18 + "px";
    boxes.forEach(element => {

        if (element.innerHTML === "") {
            if (window.getComputedStyle(element).borderColor == "rgb(240, 240, 240)"){
                element.style.visibility = "hidden";
            };
        } else if(element.innerHTML !== "" && window.getComputedStyle(element).borderColor !== "rgb(240, 240, 240)"){
            console.log("square and text");
        } else if(element.innerHTML !== "" && window.getComputedStyle(element).borderColor == "rgb(240, 240, 240)"){
            element.style.borderColor = "#fff";
        }
        
    });
    boxes.forEach(element => {
        element.style.pointerEvents = "none";
    });
}

let quality = 3; // 65 is the biggest
let greenBox = document.getElementById("greenBox");
let blueBox = document.getElementById("blueBox");
let redBox = document.getElementById("redBox");
let orangeBox = document.getElementById("orangeBox");
let speedVal = 15;

function captureSpecificPart() {
    // Get the div element
    const divToCapture = document.getElementById('mainBox');

    if ((bottomBoxMaxNumIs - topBoxMinNumIs + 2) * defHeight + 6 > (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).height, 10))) {
        addHeight = 0;
        addHeightPuzzle = (bottomBoxMaxNumIs - topBoxMinNumIs + 2) * defHeight + 6;
    } else {
        addHeight = (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).height, 10)) + 10;
        addHeightPuzzle = 0;
    }

    // Set the dimensions and position of the specific area to capture
    const captureArea = {
        xVal: (leftBoxMinNumIs - 1.5) * defWidth - 3, // left position
        yVal: (topBoxMinNumIs - 1.5) * defHeight - 3, // top position
        widthVal: (rightBoxMaxNumIs - leftBoxMinNumIs + 2) * defWidth + 6 + (parseInt(window.getComputedStyle(document.getElementById("finalQuesAddToPage")).width, 10)), // width of the area
        heightVal: addHeightPuzzle + addHeight // height of the area
    };

    xmaker.style.left = captureArea.xVal + captureArea.widthVal - 70 + "px"
    xmaker.style.top = captureArea.yVal + captureArea.heightVal - 15 + "px"

    // Use html2canvas to capture the specified area within the div
    html2canvas(divToCapture, {
        scale: quality,
        x: captureArea.xVal,
        y: captureArea.yVal,
        width: captureArea.widthVal,
        height: captureArea.heightVal
    }).then(canvas => {
        // Convert the canvas to a data URL
        
        const dataURL = canvas.toDataURL('image/png');

        // Create a temporary link element
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = `(${siteName}).png`;

        // Trigger a click on the link to start the download
        downloadLink.click();
    });

}

//----------------------------------------------show button--------------------------


//----------------------------------------------Site name copy--------------------------

document.getElementById("weblogoDiv").onclick = () => {
    copyText();
}

function copyText() {
    // Get the text content of the paragraph
    var text = "www.xmaker.uz";

    // Create a textarea element to hold the text temporarily
    var textareaCopy = document.createElement("textarea");
    textareaCopy.value = text;

    // Append the textarea to the body
    document.body.appendChild(textareaCopy);

    // Select the text in the textarea
    textareaCopy.select();
    textareaCopy.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(textareaCopy);
    alert(`"www.xmaker.uz" is copied to clipboard`)
}
//----------------------------------------------Site name copy--------------------------

function adjustElementsPosition() {

    let myelement = document.getElementById("topbox");
    let heightVal = myelement.clientHeight;
  
    if (heightVal > 50) {
      heightVal = heightVal * 9 / 10;
    } else {
      heightVal = heightVal * 8 / 10;
    }
  
    document.getElementById("downbox").style.marginTop = heightVal + "px";
    document.getElementById("offcanvasRight").style.top = heightVal + "px";
}
  
  window.addEventListener("load", adjustElementsPosition);
  window.addEventListener("resize", adjustElementsPosition);
  window.addEventListener('click', adjustElementsPosition);

function autoResize() {
    const textarea = document.getElementById("addQuesTxt");
    const copiedtextarea = document.getElementById("finalQuesAddToPage");
    textarea.style.height = "auto"; // Resetting the height to auto
    copiedtextarea.style.height = "auto";
  
    // Set the height of the textarea based on its content
    textarea.style.height = textarea.scrollHeight + "px";
    copiedtextarea.style.height = copiedtextarea.scrollHeight + "px";

    copiedtextarea.style.width = window.getComputedStyle(textarea).width;
    copiedtextarea.style.height = window.getComputedStyle(textarea).height;
}


function refreshBtn(){
    if (confirm('Confirm reset: All data will be cleared')) {
        // Save it!
        location.reload();
      } else {
        // Do nothing!
        console.log('Refreshing canseled');
      }
}