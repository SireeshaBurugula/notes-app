import React,{Component} from "react";
import {MdEdit,MdDelete} from 'react-icons/md';
const Note=({id,text}) =>{
    return(
        <div className="note">
            <span>
                {text}
            </span>
            <div className="note-footer">
                <MdEdit/>
                <MdDelete/>
            </div>
        </div>
    )
}
export default Note;