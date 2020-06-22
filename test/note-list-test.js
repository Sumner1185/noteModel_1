(function(exports) {
  function testListIsEmptyArray() {
    var list = new NoteList();

    if(list.notes.length < 0) {
      throw new Error("ut oh!");
    }
  }
  testListIsEmptyArray();
})(this);
