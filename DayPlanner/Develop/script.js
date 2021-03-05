let date =moment();
$('#date').text(date.format("MMM Do, YYYY"));

let nonStringHour =moment();
$('').text(nonStringHour.format("LT"));
let strignHour=moment(nonStringHour).format("h")
console.log(strignHour)
let hour=JSON.stringify(strignHour)
console.log(hour)

// if(strignHour==="2"){
//     document.getElementById('twoBox').style.backgroundColor="red"
//     console.log("test")
// }

