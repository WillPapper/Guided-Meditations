var titles = [
  'Breathing Meditation',
  'Loving Kindness Meditation'
]
var links = [
  'http://marc.ucla.edu/mpeg/01_Breathing_Meditation.mp3',
  'http://marc.ucla.edu/mpeg/05_Loving_Kindness_Meditation.mp3'
]

$(document).ready(function() {
  $("#another")[0].addEventListener('click', function() {
  var itemNumber = Math.floor(Math.random()*titles.length);
  console.log(itemNumber)
    $("#option").text(titles[itemNumber]);
    $("#option").attr("href", links[itemNumber]);
  }, false);
});
