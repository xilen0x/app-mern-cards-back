const { Router } = require('express');
const router = Router();
const { getNotes, getNote, createNotes, updateNote, deleteNote } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNotes)//si queremos guardar datos
    //.put()//si queremos actualizar datos
    //.delete()//si queremos eliminar datos */

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)
    
module.exports = router;