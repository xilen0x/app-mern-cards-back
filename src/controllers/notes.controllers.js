const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find(); // esto me devuelve un arreglo con todas las notas
    res.json(notes);
}

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body; //req.body son los datos que el cliente envia.
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();// guarda los datos(objeto)en la bd
    res.json({ message: 'Note saved' })
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    //console.log(note)
    res.json(note)
}

notesCtrl.updateNote = async (req, res) => {
    //console.log(req.params.id, req.body)
    const {title, content, author}=req.body;
    await Note.findOneAndUpdate(req.params.id, {
        title,
        author,
        content
    });
    res.json({ message: 'Note updated' })
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' })
}


module.exports = notesCtrl;