import react,{useState} from 'react';

const AddNewNote = ({openModal,handleNote,noteColor}) => {
    const [Title,setTitle] = useState("")
    const [Text,setText] = useState("")

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
                <div className='addtitle'>
                    <input type="text" className='atitle' placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} required></input>
                </div>
                <div className='addtext'>
                    <textarea type="textarea" className='atext' placeholder='Enter text' cols="50" rows="10" onChange={(e)=>setText(e.target.value)} required></textarea>
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