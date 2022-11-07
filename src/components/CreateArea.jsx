import { Fab } from "@material-ui/core";
// import { Note, Send } from "@material-ui/icons";
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react";
// import {useState} from "react";
function CreateArea(props)
{

    const [isExpanded,setExpanded]=useState(false);
    const [note,setNote]=useState({title: "",content: ""});
    function handleChange(event){
        const {name,value}=event.target;
        console.log(event.target);
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function expand()
    {
        setExpanded(true);
    }
    function submitNote(event)
    {
        props.onAdd(note);
        setNote({
            title:"" ,
            content:""
        });
        event.preventDefault();
    }
    return(
        <div>
            <form className="create-area">
                {isExpanded &&
                <input name="title" type="text" placeholder="Title" onChange={handleChange} value={note.title}/>}

                <textarea name="content" rows={isExpanded?3:1} onClick={expand}  placeholder="Take a note..." onChange={handleChange} value={note.content} />
                <Fab onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;