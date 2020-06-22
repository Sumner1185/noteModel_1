(function(exports) {
  function testNoteListFunctionsCanBeUsed() {
  var view = new NoteListView();

  if(view.list.notes.length !== 0) {
    throw new Error("it's broke")
  }
}
  testNoteListFunctionsCanBeUsed();
})(this);

(function(exports) {
  function returnsStringOfHtmlOfNotes() {
  var view = new NoteListView();
  var add = view.list.addNewNote("testeroony")
  if(view.returnString() != "testeroony" ) {
    throw new Error("who knows at this point")
  }
}
  returnsStringOfHtmlOfNotes();
})(this);
