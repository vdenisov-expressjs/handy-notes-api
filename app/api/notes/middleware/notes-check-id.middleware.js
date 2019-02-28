const handlerFor = require('@shared/handlers');
const { NotesModel } = require('@api/notes/notes.model');


const tableNotes = new NotesModel();


module.exports = (req, res, next) => {

  const { id: searchId } = req.params;

  if (isNaN(searchId)) {
    return handlerFor.ERROR_ON_VALIDATION(res, 'this `id` is invalid !');
  }

  tableNotes
    .checkId(req.params.id)

    .then(noteObj => {
      if (noteObj) {
        req.params.id = searchId;
        next();
      }

      else {
        return handlerFor.ERROR_NOT_FOUND(res, 'note with this `id` not found !');
      }
    })

    .catch(err => handlerFor.ERROR_ON_DATABASE(res, err));

}
