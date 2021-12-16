import React,{useState} from "react";
import { render } from "react-dom";
import {MdEdit,MdDelete} from 'react-icons/md';
import ConfirmDelete from "./ConfirmDelete";
import EditNote from "./EditNote";
const Note = ({id,title,text,colour,handleDeleteNote}) => { 
    return(
        <div className="note" style={{backgroundColor:colour}}>
            <div >
                <b>{title}</b>
            </div>
            <span >
                {text}
            </span>
            <div className="note-footer">
                <button  ><MdEdit/></button>
                <button onClick=
                     {() => ConfirmDelete({handleDeleteNote,id})}
                   >
                <MdDelete/></button>
               
            </div>
        </div>
    )
}
export default Note;