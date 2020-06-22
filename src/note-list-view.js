(function (exports) {
  function NoteListView() {
    this.list = new NoteList();
  };

  NoteListView.prototype.returnString = function() {
    let array = this.list.notes
    return `<ul>` + `<li><div>${array[0]}</div></li>` + `</ul>`
  }

  exports.NoteListView = NoteListView
})(this);
