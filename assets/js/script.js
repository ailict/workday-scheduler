presentHour = moment().format(H);
hourString = $(this).siblings("div").text();

// function identifies time box from HTML id, compares present hour to hour of time box, should color code appropriately
function colorCoding () {
    let counter = 1;
    let textEntry = "#text-entry" + counter;
    let timeNumber = hourNumber(hourString);  
        if(timeNumber < presentHour) {
        $(textEntry).addClass("past");
        } 
        else if (timeNumber > presentHour) {
        $(textEntry).addClass("future");
        } 
        else {
        $(textEntry).addClass("present");
        }
  counter ++;
};

// save text of hours divs as numerical value
function hourNumber(hourString) {
    switch(hourString) {
      case "8 AM": return 8;
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
    }
  }

// saveSchedule on save button click

$("saveBtn").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    localStorage.setItem(hourString, value);
});

//retrieve values from local storage
function loadSavedValues () {
    $("#8 .textarea").val(localStorage.getItem("8"));
    $("#9 .textarea").val(localStorage.getItem("9"));
    $("#10 .textarea").val(localStorage.getItem("10"));
    $("#11 .textarea").val(localStorage.getItem("11"));
    $("#12 .textarea").val(localStorage.getItem("12"));
    $("#13 .textarea").val(localStorage.getItem("13"));
    $("#14 .textarea").val(localStorage.getItem("14"));
    $("#15 .textarea").val(localStorage.getItem("15"));
    $("#16 .textarea").val(localStorage.getItem("16"));
    $("#17 .textarea").val(localStorage.getItem("17"));
    };

loadSavedValues();