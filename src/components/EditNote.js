import React,{useState} from 'react'

function EditNote({closeeditModal,handleEditNote,id,title,text}) {
  const [editedtitle,seteditedtitle]=useState({title});
  const [editedtext,seteditedtext]=useState({text});
  return (
    <div className="editbg">
      <div className='editcontainer'>
          <button className="editbuttonx" onClick={()=>closeeditModal(false)}>X</button>
          <div className='edittitle'>
            <label><h2><b>Title</b></h2></label>
            <input type="text" value={editedtitle.title} onChange={(e)=>seteditedtitle(e.target.value)}></input>
          </div>
          <div className='edittext'>
            <label><h3>Text</h3></label>
            <textarea type="text" value={editedtext.text} onChange={(e)=>seteditedtext(e.target.value)}></textarea>
          </div>
        <div className='editfooter'>
          <button id="cancelBtn" onClick={()=>closeeditModal(false)} >Cancel</button>
          <button onClick={()=>handleEditNote(id,editedtitle,editedtext,closeeditModal)}>Make Changes</button>
        </div>
      </div>
    </div>
  )
}
export default EditNote;
