import React from 'react'
import "./Post.css"
import {Avatar} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function Post({profilePic, username, timestamp,message}) {
    return (
        <div className="posts">
            <div className ="postsTop">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="postsBottom">
                <p>{message}</p>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon />
                    <p>Share</p>
                </div>
                
            </div>
        </div>
    )
}

export default Post
