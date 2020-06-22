(function (exports) {
  function NoteList() {
    this.notes = ["test note"]
  };

  NoteList.prototype.returnNotes = function() {
    return this.notes
  };

exports.NoteList = NoteList
})(this);
