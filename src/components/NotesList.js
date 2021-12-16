import Note from "./Note"
const NotesList = ({notes,handleDeleteNote}) =>{
    return(
        <div className="noteslist">
            { notes.map((note) => (
                 <Note id={note.id} title={note.title} text={note.text} colour={note.colour} handleDeleteNote={handleDeleteNote}/>
            ))}
        </div>
    )
}
export default NotesList