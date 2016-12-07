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
  'https://www.youtube.com/watch?v=EIJQsE8C5Is',
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
  'Weightless',
  'A Song of Myself',
  'Airstream - Electra'
]
var interestingLinks = [
  'https://www.youtube.com/watch?v=UfcAVejslrU',
  'https://www.acast.com/thememorypalace/an-odd-pre-election-bonus-episode-a-full-reading-of-song-of-myself',
  'https://www.youtube.com/watch?v=YbHZ8VVhb94'
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
    if (window.location.pathname.includes("listening")) {
      var itemNumber = Math.floor(Math.random()*listeningTitles.length);
      console.log(itemNumber)
      $("#option").text(listeningTitles[itemNumber]);
      $("#option").attr("href", listeningLinks[itemNumber]);
    }
    if (window.location.pathname.includes("acceptance")) {
      var itemNumber = Math.floor(Math.random()*acceptanceTitles.length);
      console.log(itemNumber)
      $("#option").text(acceptanceTitles[itemNumber]);
      $("#option").attr("href", acceptanceLinks[itemNumber]);
    }
    if (window.location.pathname.includes("humility")) {
      var itemNumber = Math.floor(Math.random()*humilityTitles.length);
      console.log(itemNumber)
      $("#option").text(humilityTitles[itemNumber]);
      $("#option").attr("href", humilityLinks[itemNumber]);
    }
    if (window.location.pathname.includes("gratitude")) {
      var itemNumber = Math.floor(Math.random()*gratitudeTitles.length);
      console.log(itemNumber)
      $("#option").text(gratitudeTitles[itemNumber]);
      $("#option").attr("href", gratitudeLinks[itemNumber]);
    }
    if (window.location.pathname.includes("healing")) {
      var itemNumber = Math.floor(Math.random()*healingTitles.length);
      console.log(itemNumber)
      $("#option").text(healingTitles[itemNumber]);
      $("#option").attr("href", healingLinks[itemNumber]);
    }
    if (window.location.pathname.includes("loss")) {
      var itemNumber = Math.floor(Math.random()*lossTitles.length);
      console.log(itemNumber)
      $("#option").text(lossTitles[itemNumber]);
      $("#option").attr("href", lossLinks[itemNumber]);
    }
    if (window.location.pathname.includes("responsibility")) {
      var itemNumber = Math.floor(Math.random()*responsibilityTitles.length);
      console.log(itemNumber)
      $("#option").text(responsibilityTitles[itemNumber]);
      $("#option").attr("href", responsibilityLinks[itemNumber]);
    }
    if (window.location.pathname.includes("interesting")) {
      var itemNumber = Math.floor(Math.random()*interestingTitles.length);
      console.log(itemNumber)
      $("#option").text(interestingTitles[itemNumber]);
      $("#option").attr("href", interestingLinks[itemNumber]);
    }
  }, false);
});
