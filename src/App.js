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
       title:'Oneertyertyufjiofjweiofjiowegrhtsdfg',
       text:'first note',
    },
    {
      
      id:nanoid(),
      title:'Two',
      text:'second note asdfghj asdfgh vnsxx sj js jsfkjsidjci sdfg sdfgh bvcxz defrghuji djdnnf dmdsod aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa dddddddddddddd dddddddddddddd ddddddddddddddddddd',
    },
    {
      
      id:nanoid(),
      title:'Three',
      text:'third note',
    },
    {
      
      id:nanoid(),
      title:'Four',
      text:'fourth note',
    },
    {
      
      id:nanoid(),
      title:'Five',
      text:'fifth note',
    },
    {
      
      id:nanoid(),
      title:'Six',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Seven',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Eight',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Nine',
      text:'sixth note',
    },
    {
      
      id:nanoid(),
      title:'Ten',
      text:'sixth note',
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
