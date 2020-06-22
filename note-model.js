(function (exports) {
  function NoteModel(text) {
    this.text = text
    };

  NoteModel.prototype.returnText = function() {
    return this.text;
  };
  
  exports.NoteModel = NoteModel
})(this);