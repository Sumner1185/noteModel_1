(function (exports) {
  function NoteListView() {
    this.list = new NoteList();
  };

  NoteListView.prototype.returnString = function() {
    return this.list.notes.join(", ")
  }


  exports.NoteListView = NoteListView
})(this);
