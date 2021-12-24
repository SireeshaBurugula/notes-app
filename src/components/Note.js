
import React,{useState} from "react";
import {MdEdit,MdDelete} from 'react-icons/md';
import Confirmdelete from "./Confirmdelete";
import EditNote from "./EditNote";
import Viewnote from "./viewnote";

const Note = ({id,title,text,colour,handleDeleteNote,handleEditNote}) => { 
    const [opendelModal,setopendelModal] = useState(false);
    const [openeditModal,setopeneditModal] = useState(false);
    const [openviewModal,setviewModal] = useState(false);
    return(
        <div>
        <div className="note" style={{backgroundColor:colour}}>
            <div >
                <b className="title">{title}</b>
            </div>
            <span className="text">
                {text}
            </span>
            <div className="note-footer">
                <button
                  onClick={() =>setopeneditModal(true)}>
                      <MdEdit /></button>
                <button onClick={() =>setviewModal(true)}>
                    View
                </button>
                <button
                 onClick={() =>setopendelModal(true)}>
                <MdDelete/></button>
            </div>
        </div>
        {openviewModal && <Viewnote viewModal={setviewModal} title={title} text={text}/> }
        {opendelModal && <Confirmdelete closedelModal={setopendelModal} handleDeleteNote={handleDeleteNote} id={id}/>}
        {openeditModal && <EditNote closeeditModal={setopeneditModal} handleEditNote={handleEditNote} id={id} title={title} text={text} />}
        </div>
    )
}
export default Note;
