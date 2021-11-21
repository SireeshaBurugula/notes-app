import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Button from "./components/button";
import { nanoid } from 'nanoid';
import  {useState} from 'react';


const App =() => {
  const [notes,setNotes] = useState([
    {
       id:nanoid(), 
       text:'first note',
    },
    {
      
      id:nanoid(),
      text:'second note',
    },
    {
      
      id:nanoid(),
      text:'third note',
    },
    {
      
      id:nanoid(),
      text:'fourth note',
    },
    {
      
      id:nanoid(),
      text:'fifth note',
    },
    {
      
      id:nanoid(),
      text:'sixth note',
    }
  ]);
  return (
    <div className="container">
      <Search/>
      <NotesList notes={notes}/>
      <Button/>
    </div>
  );
}

export default App;
