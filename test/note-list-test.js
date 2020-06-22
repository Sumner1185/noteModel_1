(function(exports) {
  function testListIsEmptyArray() {
    var list = new NoteList();

    if(list.notes.length < 0) {
      throw new Error("ut oh!");
    }
  }
  testListIsEmptyArray();
})(this);

(function(exports) {
  function testReturnsNotesArray() {
    var list2 = new NoteList();

    if(list2.returnNotes().length != 1) {
    throw new Error("that didn't work");
    }
  }
  testReturnsNotesArray();

})(this);
