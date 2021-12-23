import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';
import AddNewNote from './AddNewNote.js';

const PlusButton = ({handleNotes}) =>{
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false)
    const [color,setcolor] = useState("")
    const colors = ['rgb(101, 101, 202)','orange','rgb(46, 173, 46)','rgb(243, 61, 61)']

    const handleProcess = (i) => {
        setModalOpen(true);
        setcolor(colors[i])
    }

    const transition = useTransition(items,{
        from: {x:0, y:-20, opacity: 0 },
        enter: item => (next) => (next({ x: 0, y:0,opacity:1,delay: item.delay})),
        leave: {x:0, y:-20, opacity: 0},
    })
    return(
        <div class="ButtonCont">
            <button class="Button" onClick={() => {
                setItems(v => v.length ? [] : [
                    {y:-100, delay: 200},
                ]);
            }}><MdAddCircle size={50} color="#2687de" /></button>

           <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => handleProcess(0)} style={style} class="item1 colorpick" /> : ''
                )}
            </div> 
            <div class="color">
                {transition((style,item) => 
                  item ? <animated.button onClick={() => handleProcess(1)} style={style} class="item2 colorpick" /> : ''
                )}
            </div>
            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => handleProcess(2)} style={style} class="item3 colorpick" /> : ''
                )}
            </div>
            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => handleProcess(3)} style={style} class="item4 colorpick" /> : ''
                )}
            </div>
            {modalOpen && <AddNewNote openModal={setModalOpen} handleNote={handleNotes} noteColor={color}/>}
        </div>
    )
}

export default PlusButton;
