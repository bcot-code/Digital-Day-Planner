// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function populateCal() {
  const entries = document.querySelectorAll("div[id^='hour-']");

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  var eightEl = localStorage.getItem("hour-8");
  entries[0].children[1].textContent = eightEl;
  var nineEl = localStorage.getItem("hour-9");
  entries[1].children[1].textContent = nineEl;
  var tenthEl = localStorage.getItem("hour-10");
  entries[2].children[1].textContent = tenthEl;
  var eleventhEl = localStorage.getItem("hour-11");
  entries[3].children[1].textContent = eleventhEl;
  var twelveEl = localStorage.getItem("hour-12");
  entries[4].children[1].textContent = twelveEl;
  var oneEl = localStorage.getItem("hour-1");
  entries[5].children[1].textContent = oneEl;
  var twoEl = localStorage.getItem("hour-2");
  entries[6].children[1].textContent = twoEl;
  var threeEl = localStorage.getItem("hour-3");
  entries[7].children[1].textContent = threeEl;
  var fourEl = localStorage.getItem("hour-4");
  entries[8].children[1].textContent = fourEl;
  var fiveEl = localStorage.getItem("hour-5");
  entries[9].children[1].textContent = fiveEl;
  //HINT: How can the id attribute of each time-block be used to do this?
  // } else {
  //   let entryContent = (entry.innerHTML = entryContent);
  // }
}

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage.
  var hourGet = $(this).children();
  populateCal();
  console.log(hourGet);

  var valueGet = $(this).siblings(".description").val();
  localStorage.getItem(hourGet, valueGet);

  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(hour, value);
  });

  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  function hourGrabber() {
    var currentHr = Dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));
      if (currentHr === blockHour) {
        $(this).addClass("present");
      } else if (currentHr < blockHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("past");
      }
    });
    hourGrabber();
  }
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to display the current date in the header of the page.

  var date = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  $("#currentDay").text(date.toLocaleString("en-IN", options));
});
