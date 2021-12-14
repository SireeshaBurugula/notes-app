import Note from "./Note"
const NotesList = ({notes,handleDeleteNote}) =>{
    return(
        <div className="noteslist">
            { notes.map((note) => (
                 <Note id={note.id} title={note.title} text={note.text} colour={note.colour}/>
            ))}
        </div>
    )
}
export default NotesList