import React from "react";
import { render } from "@testing-library/react";
const ConfirmDelete=({handleDeleteNote,id})=>{
    return(
    <div className="delconfirmation">
        <button onClick={() =>handleDeleteNote(id)}>
            confirm delete
        </button>
        <button>
            cancel
        </button>

    </div>
    )
}
export default ConfirmDelete;