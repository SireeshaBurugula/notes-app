import NotesList from "./components/NotesList";
import Search from "./components/Search";
import NotesHeader from "./components/NotesHeader";
import Button from "./components/button";
import { nanoid } from 'nanoid';
import  {useState} from 'react';
import Split from 'react-split';


const App =() => {
  const [notes,setNotes] = useState([
    {
       id:nanoid(), 
       title:'One',
       text:'first note',
       colour:'yellow',
    },
    {
      
      id:nanoid(),
      title:'Two',
      text:'second note',
      colour:'pink',
    },
    {
      
      id:nanoid(),
      title:'Three',
      text:'third note',
      colour:'yellow',
    },
    {
      
      id:nanoid(),
      title:'Four',
      text:'fourth note',
      colour:'lightblue',
    },
    {
      
      id:nanoid(),
      title:'Five',
      text:'fifth note',
      colour:'orange',
    },
    {
      
      id:nanoid(),
      title:'Six',
      text:'sixth note',
      colour:'lightblue',
    },
    {
      
      id:nanoid(),
      title:'Seven',
      text:'sixth note',
      colour:'lightgreen',
    },
    {
      
      id:nanoid(),
      title:'Eight',
      text:'sixth note',
      colour:'yellow',
    },
   /* {
      
      id:nanoid(),
      title:'Nine',
      text:'sixth note',
      colour:'pink',
    },
    {
      
      id:nanoid(),
      title:'Ten',
      text:'sixth note',
      colour:'lightgreen',
    },
    {
      
      id:nanoid(),
      title:'Eleven',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Twleve',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Thirteen',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Fourteen',
      text:'sixth note',
    },

    {
      
      id:nanoid(),
      title:'Fifteen',
      text:'sixth note',
    }*/
    
  ]);
  const [searchText,setSearchText]=useState("");
  const deleteNote = (id,closedelModal) =>{
    const newNotes=notes.filter((note)=>note.id !== id)
    setNotes(newNotes);
    closedelModal(false);
  }
  const editNote = (id,editedtitle,editedtext,closeeditModal) =>{
      const editedNotes=notes.map((note)=>
      note.id === id 
      ?{...note,title:editedtitle,text:editedtext}:note
      );
      closeeditModal(false);
      setNotes(editedNotes);
      //console.log(editedNotes);
      //console.log(notes);
      
  }
  const addNote = () =>{
    const newNotes=[...notes,{id:nanoid(),title:"new",text:"new"}]
    setNotes(newNotes);
  }
  //const [openall,setopenall] = useState(true);
  return (
    <div className="container">
      <NotesHeader/>  
      <Search handleSearchNote={setSearchText}/>
      <Split className='flex' sizes={[10,80]} style={{ height: 'calc(100vh - 4rem)' }}>
          <Split direction='horizontal'>
          <Button handleAddNote={addNote}/> 
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
