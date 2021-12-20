import NotesList from "./components/NotesList";
import Search from "./components/Search";
import NotesHeader from "./components/NotesHeader";
import Button from "./components/button";
import { nanoid } from 'nanoid';
import  {useState} from 'react';
import Split from 'react-split';
import { MdSportsRugby } from "react-icons/md";
import {PlusButton} from "./components/button";


const App =() => {
  const [notes,setNotes] = useState([
    {
       id:nanoid(), 
       title:'One',
       text:'first note',
       colour:'yellow',
    },
    // {
      
    //   id:nanoid(),
    //   title:'Two',
    //   text:'second note',
    //   colour:'pink',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Three',
    //   text:'third note',
    //   colour:'yellow',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Four',
    //   text:'fourth note',
    //   colour:'lightblue',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Five',
    //   text:'fifth note',
    //   colour:'orange',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Six',
    //   text:'sixth note',
    //   colour:'lightblue',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Seven',
    //   text:'sixth note',
    //   colour:'lightgreen',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Eight',
    //   text:'sixth note',
    //   colour:'yellow',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Nine',
    //   text:'sixth note',
    //   colour:'pink',
    // },
    // {
      
    //   id:nanoid(),
    //   title:'Ten',
    //   text:'sixth note',
    //   colour:'lightgreen',
    // },
  ]);

  
  const addNew =(color) =>{
    setNotes(notes => [...notes,{
      id:nanoid(),
      title:"newtitle",
      text:"newtext",
      colour:color,
    }])
  console.log(notes);
  };

  //addNew()
  const [searchText,setSearchText]=useState("");
  return (
    <div className="container">
      <NotesHeader/>
      <Search handleSearchNote={setSearchText}/>
      <Split className='flex' sizes={[10,80]} style={{ height: 'calc(100vh - 4rem)' }}>
        <Split direction='horizontal'>
          <Button handleNotes={addNew}/>
        </Split>
        <NotesList notes={notes}/>
      </Split>
    </div>
  );
}

export default App;

//notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()) || note.title.toLowerCase().includes(searchText.toLowerCase()))