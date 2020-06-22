(function (exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes
  };

  NoteList.prototype.addNewNote = function(text) {
    this.notes.push(text)
  };

exports.NoteList = NoteList
})(this);
