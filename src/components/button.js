import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";

const PlusButton = () =>{
    const [colors,setcolors]= useState(false);
    const EventFunction = () =>{
        setcolors(true)
        ActivateColors()
    }

    const ActivateColors = () =>{
        if(colors === false){
            render(
                <div class="Colors">
                    <IoIosRadioButtonOn color="orange" class="colorpick"/>
                    <IoIosRadioButtonOn color="green" class="colorpick"/>
                    <IoIosRadioButtonOn color="blue" class="colorpick"/>
                    <IoIosRadioButtonOn color="yellow" class="colorpick"/>
                </div>
            )
        }
        else{
            render()
        }
    }
    return(
        <div class="ButtonCont">
            <button class="Button" onClick={() => EventFunction()}><MdAddCircle size={50} color="#2687de" /></button>
        </div>
    )
}

export default PlusButton;

