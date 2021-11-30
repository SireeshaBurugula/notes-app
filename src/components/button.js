import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";

const PlusButton = () =>{
    const [colors,setcolors]= useState(false);
    const EventFunction = () =>{
        ActivateColors()
        setcolors(true)
    }

    const ActivateColors = () =>{
        if(colors === false){
            render(
                <div class="Colors">
                    <IoIosRadioButtonOn color="orange" class="colorpick" id="topToBottom"/>
                    <IoIosRadioButtonOn color="green" class="colorpick" id="topToBottom"/>
                    <IoIosRadioButtonOn color="blue" class="colorpick" id="topToBottom"/>
                    <IoIosRadioButtonOn color="yellow" class="colorpick" id="topToBottom"/>
                </div>
            )
        }
        // else{
        //     render(
        //         <div class="Colors">
        //             <IoIosRadioButtonOn color="orange" class="colorpick" id="bottomtotop"/>
        //             <IoIosRadioButtonOn color="green" class="colorpick" id="bottomtotop"/>
        //             <IoIosRadioButtonOn color="blue" class="colorpick" id="bottomtotop"/>
        //             <IoIosRadioButtonOn color="yellow" class="colorpick" id="bottomtotop"/>
        //         </div>
        //     )
        // }
    }
    return(
        <div class="ButtonCont">
            <button class="Button" onClick={() => EventFunction()}><MdAddCircle size={50} color="#2687de" /></button>
        </div>
    )
}

export default PlusButton;

