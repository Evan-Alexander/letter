$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var dateInput = $("input#date").val();
    var toInput = $("input#to").val();
    var fromInput = $("input#from").val();

    $(".date").text(dateInput);
    $(".to").text(toInput);
    $(".from").text(fromInput);

    $("#letter").show();

    event.preventDefault();
  });
});
