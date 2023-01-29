// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
var calendarHour = $('.row time-block');
var now = dayjs();
var date = new Date();
var currentDay = $('#currentDay');

currentDay.text(now);
var diff_hours;

//Gets the element textarea
var hour9 = $("textarea[name='text9']");//.text();
var hour10 = $("textarea[name='text10']");//.text();
var hour11 = $("textarea[name='text11']");//.text();
var hour12 = $("textarea[name='text12']");//.text();
var hour1 = $("textarea[name='text1']");//.text();
var hour2 = $("textarea[name='text2']");//.text();
var hour3 = $("textarea[name='text3']");//.text();
var hour4 = $("textarea[name='text4']");//.text();
var hour5 = $("textarea[name='text5']");//.text();

console.log(hour10.text());

//Gets the value from localStorage
var text9 = localStorage.getItem("hour9");
var text10 = localStorage.getItem("hour10");
var text11 = localStorage.getItem("hour11");
var text12 = localStorage.getItem("hour12");
var text1 = localStorage.getItem("hour1");
var text2 = localStorage.getItem("hour2");
var text3 = localStorage.getItem("hour3");
var text4 = localStorage.getItem("hour4");
var text5 = localStorage.getItem("hour5");

//Sets value of the texts from the localStorage
hour9.val(text9);
hour10.val(text10);
hour11.val(text11);
hour12.val(text12);
hour1.val(text1);
hour2.val(text2);
hour3.val(text3);
hour4.val(text4);
hour5.val(text5);

//Makes the textarea background white when the user clicks on it
$("textarea").click(function(){
  $(this).addClass("editable");
});

//Returns the default background color to the textarea
$("textarea").on("blur", function(){
  $(this).removeClass("editable");
})

//After saving the data with the buttons, the values of the textareas are saved in
//the localStorage
$(document).ready(function (){
  $("#button9").click(function(){
    localStorage.setItem("hour9", hour9.val());
  });
});

$(document).ready(function (){
  $("#button10").click(function(){
    localStorage.setItem("hour10", hour10.val());
  });
});

$(document).ready(function (){
  $("#button11").click(function(){
    localStorage.setItem("hour11", hour11.val());
  });
});

$(document).ready(function (){
  $("#button12").click(function(){
    localStorage.setItem("hour12", hour12.val());
  });
});

$(document).ready(function (){
  $("#button1").click(function(){
    localStorage.setItem("hour1", hour1.val());
  });
});

$(document).ready(function (){
  $("#button2").click(function(){
    localStorage.setItem("hour2", hour2.val());
  });
});

$(document).ready(function (){
  $("#button3").click(function(){
    localStorage.setItem("hour3", hour3.val());
  });
});

$(document).ready(function (){
  $("#button4").click(function(){
    localStorage.setItem("hour4", hour4.val());
  });
});

$(document).ready(function (){
  $("#button5").click(function(){
    localStorage.setItem("hour5", hour5.val());
  });
});

/*$("#button9").on("click", function(){

})*/

/*
for (var i = 0; i < 13; i++){
  var currentHour = date.getHours();
  var hourPM = false;

  if (currentHour > 12){
    currentHour = 24 - currentHour; //Hour will be in the pm or am
    hourPM = !hourPM; //The hour is in the PM
  } else if (currentHour === 0){

  }

  if (i>0 && i<6){ //hours 1pm to 5 pm
    if (){

    }

  } else if (i > 8 && i<12){//hours 9 am to 12pm

  } else if (i === 12){ //this is 12pm

  }
  console.log(i);
}
*/
//differenceHours.diff_hours('time1','time2','result')
/*You can use like this, var dt = new Date(); var h = dt. getHours(), m = dt. getMinutes(); 
var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
*/
