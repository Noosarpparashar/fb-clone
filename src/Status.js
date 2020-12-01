import { Avatar, Input } from '@material-ui/core'
import React ,{useState} from 'react'
import "./Status.css"
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoodIcon from '@material-ui/icons/Mood';
import {useStateValue} from "./StateProvider";
import firebase from "firebase"
import db from "./firebase"

function Status() {
    const [{user},dispatch]=useStateValue();
    const [input, setInput] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            message:input,
            profilePic:user.photoURL,
            username:user.displayName
        })

    }
    return (
        <div className ="status">
            <div className ="status_top">
            <Avatar src={user.photoURL} className="status_avatar" />
            <form className="statusForm">
            <input 
             value={input}
             onChange={(e) =>setInput(e.target.value)}
            className="post" placeholder="What's on your mind.. Prasoon Parashar"/>
            <button onClick={handleSubmit} type="submit"> Hidden submit </button>
            </form>
            

            
            </div>
            <div className ="status_bottom">
             <div className="one">
            <AddPhotoAlternateIcon className="addPhotos"/>
            <h3>Add photos</h3>
            </div>  
           
            <div className="two">
            <VideocamIcon className="addLiveVideo" />
            <h3> Live Video</h3>
            </div>
            <div className="three">
            <MoodIcon className="addEmojii" />
            <h3>Add emojii</h3>
            </div>
            
            </div>

            
            
        </div>
    )
}

export default Status
