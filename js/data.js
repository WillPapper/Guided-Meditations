var basicTitles = [
  'Breathing Meditation',
  'Loving Kindness Meditation',
  'Body Scan Meditation',
  'Body and Sound Meditation',
  'Breath, Sound, Body Meditation'
]
var basicLinks = [
  'http://marc.ucla.edu/mpeg/01_Breathing_Meditation.mp3',
  'http://marc.ucla.edu/mpeg/05_Loving_Kindness_Meditation.mp3',
  'http://marc.ucla.edu/mpeg/Body-Scan-Meditation.mp3',
  'http://marc.ucla.edu/mpeg/Body-Sound-Meditation.mp3',
  'http://marc.ucla.edu/mpeg/02_Breath_Sound_Body_Meditation.mp3'
]

var listeningTitles = [

]
var listeningLinks = [

]

var acceptanceTitles = [

]
var acceptanceLinks = [

]

var humilityTitles = [

]
var humilityLinks = [

]

var gratitudeTitles = [

]
var gratitudeLinks = [

]

var healingTitles = [

]
var healingLinks = [

]

var lossTitles = [

]
var lossLinks = [

]

var responsibilityTitles = [

]
var responsibilityLinks = [

]

var interestingTitles = [

]
var interestingLinks = [

]

$(document).ready(function() {
  $("#another")[0].addEventListener('click', function() {
    console.log(window.location.pathname)
    if (window.location.pathname.includes("basics")) {
      var itemNumber = Math.floor(Math.random()*basicTitles.length);
      console.log(itemNumber)
      $("#option").text(basicTitles[itemNumber]);
      $("#option").attr("href", basicLinks[itemNumber]);
    }
  }, false);
});
