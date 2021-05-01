//current day is displayed in the on the top of the calender 
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//before the page loads check local storage to put values in boxes
 var btn1Value = localStorage.getItem('btn1');
 var btn2Value = localStorage.getItem('btn2');
 var btn3Value = localStorage.getItem('btn3');
 var btn4Value = localStorage.getItem('btn4');
 var btn5Value = localStorage.getItem('btn5');
 var btn6Value = localStorage.getItem('btn6');
 var btn7Value = localStorage.getItem('btn7');
 var btn8Value = localStorage.getItem('btn8');
 var btn9Value = localStorage.getItem('btn9');

 //populates vale into text box 
document.getElementById('text1').innerText = btn1Value;
document.getElementById('text2').innerText = btn2Value;
document.getElementById('text3').innerText = btn3Value;
document.getElementById('text4').innerText = btn4Value;
document.getElementById('text5').innerText = btn5Value;
document.getElementById('text6').innerText = btn6Value;
document.getElementById('text7').innerText = btn7Value;
document.getElementById('text8').innerText = btn8Value;
document.getElementById('text9').innerText = btn9Value;

//when event is updated the text for the event is saved in local storage
var updateButton = document.getElementById('btn1');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text1').value);
});

var updateButton = document.getElementById('btn2');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text2').value);
});

var updateButton = document.getElementById('btn3');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text3').value);
});

var updateButton = document.getElementById('btn4');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text4').value);
});

var updateButton = document.getElementById('btn5');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text5').value);
});

var updateButton = document.getElementById('btn6');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text6').value);
});

var updateButton = document.getElementById('btn7');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text7').value);
});


var updateButton = document.getElementById('btn8');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text8').value);
});

var updateButton = document.getElementById('btn9');
updateButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem(event.target.id, document.getElementById('text9').value);
});