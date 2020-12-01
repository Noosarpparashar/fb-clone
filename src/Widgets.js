import React from 'react'
import Iframe from 'react-iframe'

function Widgets() {
    return (
        <div className="widgets">
            <Iframe url="https://en.wikipedia.org/wiki/Wikipedia:Reusing_Wikipedia_content"
        width="450px"
        height="1000px"
        margin="2%"
        id="myId"
        className="widgetClass"
        display="initial"
        position="relative"/>
            
        </div>
    )
}

export default Widgets
