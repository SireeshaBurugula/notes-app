import NotesList from "./components/NotesList";
import Search from "./components/Search";
import NotesHeader from "./components/NotesHeader";
import Button from "./components/button";
import { nanoid } from 'nanoid';
import  {useState} from 'react';
import Split from 'react-split';
import { MdSportsRugby } from "react-icons/md";


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
    {
      
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
    /*{
      
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
  return (
    <div className="container">
      <NotesHeader/>
      <Search handleSearchNote={setSearchText}/>
      <div>
        
      </div>
      <Split className='flex' sizes={[10,80]} style={{ height: 'calc(100vh - 4rem)' }}>
        <Split direction='horizontal'>
          <Button/>
        </Split>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))}/>
      </Split>
    </div>
  );
}

export default App;
