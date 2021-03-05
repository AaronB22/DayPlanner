let date =moment();
$('#date').text(date.format("MMM Do, YYYY"));

let nonFormatHour =moment();
$('').text(nonFormatHour.format("LT"));
let hour1=moment(nonFormatHour).format("H")
let hour =Math.floor(hour1)

//  let hour=15
//deubber tool. Too use commet out JS4-7 and unncommet out js9 
console.log(hour)
     


if(hour>9){
document.getElementById("nineBox").style.backgroundColor="grey"
}
if (hour===9){
    document.getElementById("nineBox").style.backgroundColor="red"
}
if(hour>10){
    document.getElementById("tenBox").style.backgroundColor="grey"
}
if (hour===10){
    document.getElementById("tenBox").style.backgroundColor="red"
}
if (hour>11){
    document.getElementById("elevenBox").style.backgroundColor="grey"
}
if(hour===11){
    document.getElementById("elevenBox").style.backgroundColor="red"
}
if(hour>12){
    document.getElementById("twelveBox").style.backgroundColor="grey"
}
if(hour===12){
document.getElementById("twelveBox").style.backgroundColor="red"
}
if (hour===13){
    document.getElementById("oneBox").style.backgroundColor="red"
}
if(hour>13){
    document.getElementById("oneBox").style.backgroundColor="grey"
}
if (hour===14){
    document.getElementById("twoBox").style.backgroundColor="red"
}
if (hour>14){
    document.getElementById("twoBox").style.backgroundColor="grey"
}
if(hour===15){
    document.getElementById("threeBox").style.backgroundColor="red"
}
if(hour>15){
    document.getElementById("threeBox").style.backgroundColor="grey"
}

if(hour===16){
    document.getElementById("fourBox").style.backgroundColor="red"
}
if(hour>16){
    document.getElementById("fourBox").style.backgroundColor="grey"
}

if(hour===17){
    document.getElementById("fiveBox").style.backgroundColor="red"
}
if(hour>17){
    document.getElementById("fiveBox").style.backgroundColor="grey"
}







