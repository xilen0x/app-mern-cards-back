const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: [] })

notesCtrl.createNotes = (req, res) => res.json({ message: 'Note saved' })

notesCtrl.getNote = (req, res) => res.json({ title: 'El Señor de los huesillos' })

notesCtrl.updateNote = (req, res) => res.json({ message: 'Note updated' })

notesCtrl.deleteNote = (req, res) => res.json({ message: 'Note deleted' })


module.exports = notesCtrl;