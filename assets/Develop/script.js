
//Get current date, format it, and show it in the page
var currentDate = dayjs();
var formattedDate = currentDate.format("dddd, MMMM DD, YYYY");
$('#currentDay').text(formattedDate);

//Gets the element textarea
var hour9 = $("textarea[name='text-9']");//.text();
var hour10 = $("textarea[name='text-10']");//.text();
var hour11 = $("textarea[name='text-11']");//.text();
var hour12 = $("textarea[name='text-12']");//.text();
var hour1 = $("textarea[name='text-13']");//.text();
var hour2 = $("textarea[name='text-14']");//.text();
var hour3 = $("textarea[name='text-15']");//.text();
var hour4 = $("textarea[name='text-16']");//.text();
var hour5 = $("textarea[name='text-17']");//.text();

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

//checks that the document is loaded, then when there's a click in one of the buttons
//I send the information in the textarea to the localStorage. This happens for each button

$(document).ready(function (){
  $("#button-9").click(function(){
    localStorage.setItem("hour9", hour9.val());
  });
});

$(document).ready(function (){
  $("#button-10").click(function(){
    localStorage.setItem("hour10", hour10.val());
  });
});

$(document).ready(function (){
  $("#button-11").click(function(){
    localStorage.setItem("hour11", hour11.val());
  });
});

$(document).ready(function (){
  $("#button-12").click(function(){
    localStorage.setItem("hour12", hour12.val());
  });
});

$(document).ready(function (){
  $("#button-1").click(function(){
    localStorage.setItem("hour1", hour1.val());
  });
});

$(document).ready(function (){
  $("#button-2").click(function(){
    localStorage.setItem("hour2", hour2.val());
  });
});

$(document).ready(function (){
  $("#button-3").click(function(){
    localStorage.setItem("hour3", hour3.val());
  });
});

$(document).ready(function (){
  $("#button-4").click(function(){
    localStorage.setItem("hour4", hour4.val());
  });
});

$(document).ready(function (){
  $("#button-5").click(function(){
    localStorage.setItem("hour5", hour5.val());
  });
});

//Current hour has military time 9 am to 17 pm
var date = new Date();
var currentHour = date.getHours();
var hourPM = false; //if it's morning

// if currentHour is above 12, then it is PM
if (currentHour > 12){
  hourPM = true; //The hour is in the PM
}

//loop that checks each textarea from 9 am to 5 pm
$("textarea").each(function(event){
  
  //Convert currentHour to String
  currentHour = currentHour;//16

  //this.name gets the ID from the textarea 9 - 17
  var rowNo =(this.name).split("-");
  var numberRowNo = parseInt(rowNo);
  console.log(rowNo[1]);
  console.log(currentHour);

  //go through the rows and assign the colors of past, present, and future
  if (currentHour < rowNo[1]){
    console.log("Inside future Row No. "+rowNo[1].trim());
    console.log("Inside future current hr "+currentHour);

    $("textarea[name='text-"+rowNo[1]+"']").addClass("future");
    console.log("future "+rowNo[1]);

  } else if (currentHour > rowNo[1]){

    $("textarea[name='text-"+rowNo[1]+"']").addClass("past");
    console.log("Past "+rowNo[1]);

  } else if (currentHour == rowNo[1]){

    $("textarea[name='text-"+rowNo[1]+"']").addClass("present");
    console.log("Present "+rowNo[1]);

  }

});

