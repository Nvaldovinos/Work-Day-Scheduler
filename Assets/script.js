//current day is displayed in the on the top of the calender 
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//when event is updated the text for the event is saved in local storage

var updateButton = $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9');
updateButton.addEventListener("click", function(event){
    event.preventDefault();

    localStorage.setItem('updateButton');s
});