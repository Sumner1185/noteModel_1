(function(exports) {
  function testListIsEmptyArray() {
    var list = new NoteList();

    if(list.notes.length !== 0) {
      throw new Error("ut oh!");
    }
  }
  testListIsEmptyArray();
})(this);

(function(exports) {
  function testReturnsNotesArray() {
    var list = new NoteList();

    if(list.returnNotes().length !== 0) {
    throw new Error("that didn't work");
    }
  }
  testReturnsNotesArray();

})(this);

(function(exports) {
  function testAddNewNoteAndPushToNotes() {
    var list = new NoteList();
    list.addNewNote("testy");

    if(list.notes.length !== 1) {
      throw new Error("Run!!!!");
    }
  }
  testAddNewNoteAndPushToNotes();
})(this);
