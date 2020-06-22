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
  function returnsStringOfSingleNoteEntry() {
    var view = new NoteListView();
    view.list.addNewNote("testeroony")
    if(view.returnString() != "<ul><li><div>testeroony</div></li></ul>") {
      throw new Error("who knows at this point")
    }
  }
  returnsStringOfSingleNoteEntry();
})(this);

(function(exports) {
  function returnsStringOfMultiNoteEntry() {
    var view = new NoteListView();
    view.list.addNewNote("testeroony");
    view.list.addNewNote("test");
    if(view.returnString() != "<ul><li><div>testeroony</div></li><li><div>test</div></li></ul>") {
      throw new Error("We've come this far")
    }
  }
  returnsStringOfMultiNoteEntry();
})(this);
