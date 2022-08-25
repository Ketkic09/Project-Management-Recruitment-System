import React,{useState} from 'react'
import { useContext } from 'react'
import { DashboardContext } from '../../../Helpers/Contexts'
import History from '../../History'
import '../Sidebar.css'
import {SidebarDashboardData} from "./SidebarDashboardData"

function SidebarDashboard() {
     const{
          dashboardstate,setDashboardstate
      }=useContext(DashboardContext)
       const changepath = (val)=>{
          setDashboardstate(val)
          History.push(val)
        }
  return (
      <div className='Sidebar'>
        <ul className='SidebarList'>
            {SidebarDashboardData.map((val,key)=>{
                return(
                    <li key={key} onClick={()=>{changepath(val.link)}} id={window.location.pathname === val.link ? "active": ""} className='SidebarRow' >
                        <div className="SidebarRowIcon">{val.icon}</div>
                        <div className='SidebarRowTitle'>{val.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SidebarDashboard