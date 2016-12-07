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
  'Meditation To Ease Anxiety, Worry and Urgency',
  'Blissful Deep Relaxation',
  'Meditation for Sleep and Relaxation',
  'Deep Relaxation and Bliss',
]
var listeningLinks = [
  'https://www.youtube.com/watch?v=xoYnqvadurg',
  'https://www.youtube.com/watch?v=Jyy0ra2WcQQ',
  'https://www.youtube.com/watch?v=a8LjxXSxBeA',
  'https://www.youtube.com/watch?v=wXj_KeDXgCU',
]

var acceptanceTitles = [
  'Meditation for Working with Difficulties',
  'Meditation To Ease Anxiety, Worry and Urgency',
  'In Transition - Endings and New Beginnings',
  'Forgiveness, Releasing Guilt and Letting Go',
  'Letting Go',
]
var acceptanceLinks = [
  'http://marc.ucla.edu/mpeg/04_Meditation_for_Working_with_Difficulties.mp3',
  'https://www.youtube.com/watch?v=xoYnqvadurg',
  'https://www.youtube.com/watch?v=SzLfO-FC4_c',
  'https://www.youtube.com/watch?v=v5P7lG-IaIg',
  'https://www.youtube.com/watch?v=nlsQgzNghCU',
]

var humilityTitles = [
  'The Five Minute Miracle',
  'Forgiveness, Releasing Guilt and Letting Go',
]
var humilityLinks = [
  'https://www.youtube.com/watch?v=utfw-rJUvy4',
  'https://www.youtube.com/watch?v=v5P7lG-IaIg',
]

var gratitudeTitles = [
  'The Five Minute Miracle',
  'Deep Relaxation and Bliss',
]
var gratitudeLinks = [
  'https://www.youtube.com/watch?v=utfw-rJUvy4',
  'https://www.youtube.com/watch?v=wXj_KeDXgCU',
]

var healingTitles = [
  'The Five Minute Miracle',
  'Blissful Deep Relaxation',
  'Healing Spirit',
  'In Transition - Endings and New Beginnings',
  'Healing the Body, Mind, and Spirit',
  'Forgiveness, Releasing Guilt and Letting Go',
  'Letting Go',
]
var healingLinks = [
  'https://www.youtube.com/watch?v=utfw-rJUvy4',
  'https://www.youtube.com/watch?v=Jyy0ra2WcQQ',
  'https://www.youtube.com/watch?v=EIJQsE8C5Is'
  'https://www.youtube.com/watch?v=SzLfO-FC4_c',
  'https://www.youtube.com/watch?v=m80rkYbgSwg',
  'https://www.youtube.com/watch?v=v5P7lG-IaIg',
  'https://www.youtube.com/watch?v=nlsQgzNghCU',
]

var lossTitles = [
  'In Transition - Endings and New Beginnings',
  'Forgiveness, Releasing Guilt and Letting Go',
]
var lossLinks = [
  'https://www.youtube.com/watch?v=SzLfO-FC4_c',
  'https://www.youtube.com/watch?v=v5P7lG-IaIg',
]

var responsibilityTitles = [
  'The Five Minute Miracle',
]
var responsibilityLinks = [
  'https://www.youtube.com/watch?v=utfw-rJUvy4',
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
