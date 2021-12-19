import React from 'react'

function confirmdelete({closedelModal,handleDeleteNote,id}) {
  return (
    <div className="confirmdelbg">
      <div className='confirmdelcontainer'>
        <button className="confirmdelx" onClick={()=>closedelModal(false)}>X</button>
        <div className='confirmdeltitle'>
          <h1>Are you sure you want to delete :(</h1>
        </div>
        <div className='confirmdelbody'>
          <p>Your amazing note is gonna be deleted</p>
        </div>
        <div className='confirmdelfooter'>
          <button id="cancelBtn" onClick={()=>closedelModal(false)} >Cancel</button>
          <button onClick={()=>handleDeleteNote(id,closedelModal)}>Confirm Delete</button>
        </div>
      </div>
    </div>
  )
}

export default confirmdelete
