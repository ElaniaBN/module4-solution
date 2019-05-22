// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (){
  console.log("Good bye ");
})();

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =
(funtion(window))
  var byeSpeaker = {};
  byeSpeaker.name = "aaa";
  var bye = "GOOD BYE";
  bye.sayBye = function() {
    console.log(bye + byeSpeaker.name);
  }
  window.byeSpeaker = byeSpeaker;
}) (window);

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

var sayBye = {};
sayBye.name = "";

sayBye.speak = function speak() {
  console.log(speakWord + " " + sayBye.name);
}
  
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
sayBye = byeSpeaker;