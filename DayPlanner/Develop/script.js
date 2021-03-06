let date =moment();
$('#date').text(date.format("MMM Do, YYYY"));

// let nonFormatHour =moment();
// $('').text(nonFormatHour.format("LT"));
// let hour1=moment(nonFormatHour).format("H")
// let hour =Math.floor(hour1)
 let hour=18
//deubber tool. Too use commet out JS4-7 and unncommet out js9 

const buttonPress0 = document.querySelector(".sb0")
buttonPress0.addEventListener("click", funBtn0)
const buttonPress1 = document.querySelector(".sb1")
buttonPress1.addEventListener("click", funBtn1)
const buttonPress2 = document.querySelector(".sb2")
buttonPress2.addEventListener("click", funBtn2)
const buttonPress3 = document.querySelector(".sb3")
buttonPress3.addEventListener("click", funBtn3)
const buttonPress4 = document.querySelector(".sb4")
buttonPress4.addEventListener("click", funBtn4)
const buttonPress5 = document.querySelector(".sb5")
buttonPress5.addEventListener("click", funBtn5)
const buttonPress6 = document.querySelector(".sb6")
buttonPress6.addEventListener("click", funBtn6)
const buttonPress7 = document.querySelector(".sb7")
buttonPress7.addEventListener("click", funBtn7)
const buttonPress8 = document.querySelector(".sb8")
buttonPress8.addEventListener("click", funBtn8)
const savedButton = [b0,b1,b2,b3,b4,b5,b6,b7]
const inputArray= [nineBox,tenBox,elevenBox,twelveBox,oneBox,twoBox,threeBox,fourBox,fiveBox]


console.log(hour)
if(hour>9){
inputArray[0].style.backgroundColor="grey"
}
if (hour===9){
    inputArray[0].style.backgroundColor="red"
}
if(hour>10){
    inputArray[1].style.backgroundColor="grey"
}
if (hour===10){
    inputArray[1].style.backgroundColor="red"
}
if (hour>11){
    inputArray[2].style.backgroundColor="grey"
}
if(hour===11){
    inputArray[2].style.backgroundColor="red"
}
if(hour>12){
    inputArray[3].style.backgroundColor="grey"
}
if(hour===12){
inputArray[3].style.backgroundColor="red"
}
if (hour===13){
    inputArray[4].style.backgroundColor="red"
}
if(hour>13){
    inputArray[4].style.backgroundColor="grey"
}
if (hour===14){
    inputArray[5].style.backgroundColor="red"
}
if (hour>14){
    inputArray[5].style.backgroundColor="grey"
}
if(hour===15){
    inputArray[6].style.backgroundColor="red"
}
if(hour>15){
    inputArray[6].style.backgroundColor="grey"
}
if(hour===16){
    inputArray[7].style.backgroundColor="red"
}
if(hour>16){
    inputArray[7].style.backgroundColor="grey"
}
if(hour===17){
    inputArray[8].style.backgroundColor="red"
}
if(hour>17){
    inputArray[8].style.backgroundColor="grey"
}

//local storage
inputArray[0].value=localStorage.getItem("storage9")
inputArray[1].value=localStorage.getItem("storage10")
inputArray[2].value=localStorage.getItem("storage11")
inputArray[3].value=localStorage.getItem("storage12")
inputArray[4].value=localStorage.getItem("storage13")
inputArray[5].value=localStorage.getItem("storage14")
inputArray[6].value=localStorage.getItem("storage15")
inputArray[7].value=localStorage.getItem("storage16")
inputArray[8].value=localStorage.getItem("storage17")


function funBtn0(){
let nineText=inputArray[0].value
let storage0= localStorage.setItem("storage9",(nineText))}
function funBtn1(){
    let tenText=inputArray[1].value
    let storage1= localStorage.setItem("storage10",(tenText))}

function funBtn2(){
    let elevenText=inputArray[2].value
    let storage2= localStorage.setItem("storage11",(elevenText))}
    
function funBtn3(){
    let twelveText=inputArray[3].value
    let storage3= localStorage.setItem("storage12",(twelveText))}

function funBtn4(){
    let oneText=inputArray[4].value
    let storage4= localStorage.setItem("storage13",(oneText))}

 function funBtn5(){
    let twoText=inputArray[5].value
    let storage5= localStorage.setItem("storage14",(twoText))}

 function funBtn6(){
    let threeText=inputArray[6].value
    let storage6= localStorage.setItem("storage15",(threeText))}

function funBtn7(){
     let fourText=inputArray[7].value
    let storage7= localStorage.setItem("storage16",(fourText))}

 function funBtn8(){
    let fiveText=inputArray[8].value
    let storage8= localStorage.setItem("storage17",(fiveText))}

