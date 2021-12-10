import Note from "./Note"
const NotesList = ({notes}) =>{
    return(
        <div className="noteslist">
            { notes.map((note) => (
                 <Note id={note.id} title={note.title} text={note.text}/>
            ))}
        </div>
    )
}
export default NotesList