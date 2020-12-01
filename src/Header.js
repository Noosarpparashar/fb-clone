import React from 'react'
import "./Header.css"

import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StoreIcon from '@material-ui/icons/Store';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Avatar from '@material-ui/core/Avatar';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStateValue} from "./StateProvider"





function Header() {
    const [{user},dispatch]=useStateValue();
    return (

        
        <div className="header">
            <div className="header__left">
                <img src="https://www.msi-tirol.com/wp-content/uploads/2019/11/facebook-android.png-l.jpg " alt="Avatar" round="30px"></img>
            <div className="header__input">
                <div className="searchIcon">
                <SearchIcon />
                </div>
                 <input placeholder="Search bharatibook" type="text" />
                  </div>
            </div>
            

            <div className="header__middle">
                <div className="home">
                    <HomeIcon fontSize="large"/>
                </div>


                <div className="watch">
                    <PlayCircleFilledIcon fontSize="large" />
                </div>

                <div className="marketplace">
                    <StoreIcon  fontSize="large"/>
                </div>
                <div className="groups">
                    <GroupWorkIcon fontSize="large" />
                </div>
                <div className="gaming">
                    <SportsEsportsIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <   div className="header__info">
                    <h3>{user.displayName}</h3>
                   <Avatar src={user.photoURL}/> 
                    
                    
                     
                    </div>
                    <div className="add">
                        <AddCircleOutlineIcon fontSize="large"/>
                                       
                    </div>
                    <div className="chat">
                        <ChatIcon fontSize="large"/>
                    </div>
                    <div className="notification">
                        <NotificationsIcon fontSize="large"/>
                   
                    </div>
                    <div className="drop">
                        <ArrowDropDownCircleIcon fontSize="large"/>
                    
                    </div>
                               
     

            </div>

        </div>
    )
}

export default Header
