import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@material-ui/core';

function SidebarRow({src,Icon,title}) {
    return (
        <div classname="sidebarRow">
            <div className="sidebar1"> 
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h3>{title}</h3>
            </div>
       
        </div>
        
    );
}

export default SidebarRow;
 