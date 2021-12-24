import react,{useState} from 'react';

const AddNewNote = ({openModal,handleNote,noteColor}) => {
    const [Title,setTitle] = useState("title")
    const [Text,setText] = useState("text")

    const CloseAfterAdding = () => {
        console.log(noteColor);
        openModal(false);
        handleNote(noteColor,Title,Text)
    }

    return (
        <div className='addbg'>
            <div className='addcont'>
                <button className='confirmAddx' onClick={()=>{
                    openModal(false);
                }}>X</button>
                <div>
                    <input type="text" className='addtitle' placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div>
                    <input type="textarea" className='addtext' placeholder='Enter text' cols="50" rows="10" onChange={(e)=>setText(e.target.value)}></input>
                </div>
                <div className='addfooter'>
                    <button onClick={()=>{
                        openModal(false);
                    }} id="cancelBtn">Cancel</button>
                    <button onClick={()=>{
                        CloseAfterAdding()
                    }}>Add Note</button>
                </div>
            </div>
        </div>
    )
}
export default AddNewNote;