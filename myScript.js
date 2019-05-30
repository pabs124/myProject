let str = "";

function rateFunction() {
  let insured = $("#currentlyInsured").val();
  let age = $("#ageRange").val();

  if (insured === "yes") {
    if (age === "") {
      str = "Please select an age!";
    } else if (age === "35to44" || age === "45to55" || age === "over55") {
      str = "Yes, we have great rates available!";
    } else {
      str = "Coming Soon!";
    }
  } else if (insured === "no") {
    str = "Sorry, no rates available.";
  } else if (insured === "") {
    str = "Please select if you are currently insured or not";
  }
}
$(document).ready(function() {
  $("#myModal").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var titleData = button.data("title");
    $(this)
      .find(".modal-title")
      .text(str);
  });
});
