(function(exports) {
  function testNoteCanExclaim() {
    var note = new Note("My fave language is JS");

    if(note.text !== "My fave language is JS") {
      throw new Error("Houston we have a problem!");
    }
  };

  testNoteCanExclaim();
})(this);

(function(exports) {
  function testReturnsText() {
    var noteTwo = new Note("I love code");

    if(noteTwo.returnText !== "I love code") {
      throw new Error("Sheeeeeeet");
    }
  };
  testReturnsText();
})
