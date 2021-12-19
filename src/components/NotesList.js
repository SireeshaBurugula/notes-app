import Note from "./Note"
const NotesList = ({notes,handleDeleteNote,handleEditNote}) =>{
    return(
        <div className="noteslist">
            { notes.map((note) => (
                 <Note id={note.id} title={note.title} text={note.text} colour={note.colour} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
            ))}
            
        </div>
    )
}
export default NotesList