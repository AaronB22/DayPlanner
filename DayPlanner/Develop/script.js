let date =moment();
$('#date').text(date.format("MMM Do, YYYY"));

// let nonFormatHour =moment();
// $('').text(nonFormatHour.format("LT"));
// let hour1=moment(nonFormatHour).format("H")
// let hour =Math.floor(hour1)
 let hour=18
//deubber tool. Too use commet out JS4-7 and unncommet out js9 

const buttonPress = document.querySelector(".sb")
buttonPress.addEventListener("click", funBtn)
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


function funBtn(){
let nineText=inputArray[0].value
let storage0= localStorage.setItem("storage9",(nineText))
let tenText=inputArray[1].value
let storage1= localStorage.setItem("storage10",(tenText))


}









