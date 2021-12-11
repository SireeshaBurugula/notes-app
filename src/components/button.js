import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import { useTransition } from '@react-spring/core';
import { animated } from '@react-spring/web';
import { Split } from 'react-split';

const PlusButton = () =>{
    const [colors,setcolors]= useState(false);
    const [items, setItems] = useState([]);
    const transition = useTransition(items,{
        from: {x:0, y:-20, opacity: 0 },
        enter: item => (next) => (next({ x: 0, y:0,opacity:1,delay: item.delay})),
        leave: {x:0, y:-20, opacity: 0},
    })
    console.log(items);
    const printsomething = () =>{
        console.log("Hiii");
    }
    return(
        <div class="ButtonCont">
            <button class="Button" onClick={() => {
                setItems(v => v.length ? [] : [
                    {y:-100, delay: 200},
                ]);
            }}><MdAddCircle size={50} color="#2687de" /></button>

            <div class="color">
                {transition((style,item) => 
                    item ? <animated.button onClick={() => printsomething()} style={style} class="item1 colorpick" /> : ''
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

// return(
//         <div class="ButtonCont">
//             <button class="Button" onClick={() => {
//                 setIsVisble(v => !v);
//             }}>{isVisible ? 'un-mount' : "mount"}<MdAddCircle size={50} color="#2687de" /></button>
//             <div class="color">
//                 {isVisible ? <div class="item"/> : ""}
//             </div>
//         </div>
//     )
// const EventFunction = () =>{
    //     ActivateColors()
    //     setcolors(true)
    // }

    // const ActivateColors = () =>{
    //     if(colors === false){
    //         render(
    //             <div class="Colors">
    //                 <IoIosRadioButtonOn color="orange" class="colorpick" id="topToBottom"/>
    //                 <IoIosRadioButtonOn color="green" class="colorpick" id="topToBottom"/>
    //                 <IoIosRadioButtonOn color="blue" class="colorpick" id="topToBottom"/>
    //                 <IoIosRadioButtonOn color="yellow" class="colorpick" id="topToBottom"/>
    //             </div>
    //         )
    //     }
    //     else{
    //         render(
    //             <div class="Colors">
    //                 <IoIosRadioButtonOn color="orange" class="colorpick" id="bottomtotop"/>
    //                 <IoIosRadioButtonOn color="green" class="colorpick" id="bottomtotop"/>
    //                 <IoIosRadioButtonOn color="blue" class="colorpick" id="bottomtotop"/>
    //                 <IoIosRadioButtonOn color="yellow" class="colorpick" id="bottomtotop"/>
    //             </div>
    //         )
    //     }
    // }