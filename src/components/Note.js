import { render } from "@testing-library/react";
import React,{useState} from "react";
import {MdEdit,MdDelete, MdHideImage, MdOutlineSettingsInputHdmi} from 'react-icons/md';
import EditNote from "./EditNote";
import deleteConfirmation from "./deleteConfirmation";
const Note=({id,title,text,colour,handleDeleteNote}) =>{

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
                <button onClick={() =>{handleDeleteNote(id)}}><MdDelete/></button>
            </div>
        </div>
    )
}
export default Note;