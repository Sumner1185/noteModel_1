(function(exports) {
  function testNoteModelCanExclaim() {
    var note = new NoteModel("My fave language is JS");

    if(note.text !== "My fave language is JS") {
      throw new Error("Houston we have a problem!");
    }
  };

  testNoteModelCanExclaim();
})(this);

(function(exports) {
  function testReturnsText() {
    var noteTwo = new NoteModel("I love code");

    if(noteTwo.returnText !== "I love code") {
      throw new Error("Sheeeeeeet");
    }
  };
  testReturnsText();
})