import react,{useState} from 'react';

const Viewnote = ({viewModal,title,text}) => {

    return (
        <div className='addbg'>
            <div className='addcont'>
                <button className='confirmAddx' onClick={()=>{
                    viewModal(false);
                }}>X</button>
                <div className='atitle'>
                    {title}
                </div>
                <div className='atext'>
                    {text}
                </div>
            </div>
        </div>
    )
}
export default Viewnote;