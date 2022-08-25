import React from 'react';
import './Sidebar.css'
import {SidebarData} from "./SidebarData"
function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className='SidebarList'>
            {SidebarData.map((val,key)=>{
                return(
                    <li key={key} onClick={()=>{window.location.pathname=val.link}} id={window.location.pathname === val.link ? "active": ""} className='SidebarRow' >
                        <div className="SidebarRowIcon">{val.icon}</div>
                        <div className='SidebarRowTitle'>{val.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default Sidebar;
