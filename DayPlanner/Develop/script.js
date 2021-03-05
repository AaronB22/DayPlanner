let date =moment();
$('#date').text(date.format("MMM Do, YYYY"));

let nonFormatHour =moment();
$('').text(nonFormatHour.format("LT"));
let hour=moment(nonFormatHour).format("H")
console.log(hour)

// if(strignHour==="2"){
//     document.getElementById('twoBox').style.backgroundColor="red"
//     console.log("test")
// }

if(hour>9){
document.getElementById("nineBox").style.backgroundColor="grey"
}
if (hour===9){
    document.getElementById("nineBox").style.backgroundColor="red"
}
if(hour )












