function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var upperCaseString = string.toUpperCase();
  console.log(upperCaseString);
}

function logWhisper(string) {
  var lowerCaseString = string.toLowerCase();
  console.log(lowerCaseString);
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
};