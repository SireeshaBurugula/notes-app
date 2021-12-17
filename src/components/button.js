import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';
import {addNewNote} from 'D:/notes-app/src/App.js';
import NotesHeader from './NotesHeader';
import { nanoid } from 'nanoid';

const addNew =({notes}) =>{
    notes.push({
        id:nanoid(),
        title:'twelve',
        text:'sixth note',
        colour:'lightgreen',
    })
};

const PlusButton = ({notes}) =>{
    const [colors,setcolors]= useState(false);
    const [items, setItems] = useState([]);
    const transition = useTransition(items,{
        from: {x:0, y:-20, opacity: 0 },
        enter: item => (next) => (next({ x: 0, y:0,opacity:1,delay: item.delay})),
        leave: {x:0, y:-20, opacity: 0},
    })
    
    const newobj = 'hiii'

    const printsomething = () =>{
        console.log('hiii');
    }
    


    // const addNew =({notes,addNote}) =>{
    //     addNote([...notes,newobj])
    // }

    return(
        <div class="ButtonCont">
            <button class="Button" onClick={() => {
                setItems(v => v.length ? [] : [
                    {y:-100, delay: 200},
                ]);
            }}><MdAddCircle size={50} color="#2687de" /></button>

           <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => addNew({notes})} style={style} class="item1 colorpick" /> : ''
                )}
            </div> 
            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => printsomething()} style={style} class="item2 colorpick" /> : ''
                )}
            </div>
            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => printsomething()} style={style} class="item3 colorpick" /> : ''
                )}
            </div>
            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => printsomething()} style={style} class="item4 colorpick" /> : ''
                )}
            </div>
        </div>
    )
}

export default PlusButton;
