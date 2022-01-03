import NotesList from "./components/NotesList";
import Search from "./components/Search";
import NotesHeader from "./components/NotesHeader";
import Button from "./components/button";
import { nanoid } from 'nanoid';
import  {useState,useEffect} from 'react';
import Split from 'react-split';
import swal from 'sweetalert';

const App =() => {
  const [notes,setNotes] = useState([
    ]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = localStorage.getItem('notes');
      console.log(getData);
      if (getData !== '' && getData !== null) {
        return setNotes(JSON.parse(getData));
      }
      return setNotes([]);
    }
  }, []);


  const addNew =(noteColor,title,text) =>{
    if(text==="" || title===""){
      swal("Please fill all the details")
    }
    else{
    const newNotes=[...notes,{
      id:nanoid(),
      title:title,
      text:text,
      colour:noteColor,
    }];

    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setNotes(newNotes);
    }
  }
  console.log(notes);
  };

  const [searchText,setSearchText]=useState("");
  const deleteNote = (id,closedelModal) =>{  
  const newNotes=notes.filter((note)=>note.id !== id)
    closedelModal(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setNotes(newNotes);
    }
  }
  const editNote = (id,editedtitle,editedtext,closeeditModal) =>{
      let editedNotes=notes.map((note)=>
      note.id === id 
      ?{...note,title:editedtitle,text:editedtext}:note
      );
      closeeditModal(false);
      setNotes(editedNotes);
      console.log(notes);
      
  }
  return (
    <div className="container">

      <NotesHeader/>  
      <Search handleSearchNote={setSearchText}/>
      <Split sizes={[10,80]} style={{ height: 'calc(100vh - 4rem)' }}>
          <Split className='sidebar' direction='horizontal'>
          <Button  handleNotes={addNew}/> 
          </Split>
        <NotesList 
                notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))}
                handleDeleteNote={deleteNote} handleEditNote={editNote}
                />   
      </Split>
    </div>
  );
}

export default App;

//notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))