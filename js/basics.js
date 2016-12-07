$(document).ready(function() {
  $("#another")[0].addEventListener('click', function() {
    $("#option").text("" + Math.random());
  }, false);
});
