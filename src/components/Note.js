import { render } from "@testing-library/react";
import React,{Component} from "react";
import {MdEdit,MdDelete} from 'react-icons/md';
import EditNote from "./EditNote";
const Note=({id,title,text}) =>{
    /*function CallEditNote(id)
    {
        render(
        <div>{id}</div>
        )
    }*/
    return(
        <div className="note">
            <div >
                <b>{title}</b>
            </div>
            <span >
                {text}
            </span>
            <div className="note-footer">
                <button /*onClick={() => CallEditNote(id)}*/ ><MdEdit/></button>
                <button><MdDelete/></button>
            </div>
        </div>
    )
}
export default Note;