import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import {useStateValue} from "./StateProvider";

function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Hospital"/>
            <SidebarRow Icon={PeopleIcon} title="People"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Video"/>
            <SidebarRow Icon={HistoryIcon} title="Memories"/>
            <SidebarRow Icon={SportsEsportsIcon} title="Games"/>
            
            
            

           

            
        </div>
    )
}

export default Sidebar
