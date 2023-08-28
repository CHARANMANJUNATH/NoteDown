import React,{useState} from "react";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const[note,setNote]=useState({
                            title:"",
                            content:""
                                 });

 function handleChange(event){
    const{name, value}=event.target;

    setNote(prevNote=>{
        return({
            ...prevNote,
            [name]:value
        })
    })
 } 

    function handleClick(event){
        props.onAdd(note);
        event.preventDefault();
    }
    function expand() {
        setExpanded(true);
      }
    
  return (
    <div>
       <form className="create-note">
       {isExpanded && ( <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />)}
        <textarea onChange={handleChange}   onClick={expand} name="content" placeholder="Take a note..."  rows={isExpanded ? 3 : 1} value={note.content}/>
       <Zoom in={isExpanded}><Fab onClick={handleClick}><LibraryAddIcon /></Fab></Zoom> 
      </form>
    </div>
  );
}


export default CreateArea;
