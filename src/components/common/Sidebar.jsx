import { useContext, useState } from 'react';
import './Sidebar.css'

// ICONOS
import { LuChevronDown } from "react-icons/lu";
import { LuLineChart } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuChevronLeft } from "react-icons/lu";


import { ToggleButton } from './ToggleButton';

import { GlobalContext } from '../../context/GlobalContext';

export function Sidebar({ isSidebarOpen, setIsSidebarOpen }){

    const [isOpnReports, setIsOpnReports] = useState(false);
    const { theme, toggleTheme } = useContext(GlobalContext);

    return(

        <>
        <div className={`sidebar${ isSidebarOpen ? '' : ' close' }`}>

            
            <div className="logo">
                <span className='logo-icon'>JFD</span>
                <span className='logo-name'></span>
                <LuChevronLeft className='sidebar-btn' onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
            </div>

            <ul className="nav-links">
                

                <li className={`${isOpnReports ? 'showMenu' : ''}`}>
                    <div className='multi-link'>
                        
                        <a href="#">
                            <LuLineChart />
                            <span className='link-name'>Dashboard</span>
                        </a>

                            <LuChevronDown className='arrow-icon' onClick={() => {setIsOpnReports(!isOpnReports)}}/>
                    </div>
                    <ul className='sub-menu'>

                            
                            <li><a className='link-name' href="#">Dashboard</a></li>
                            <li><a href="/">Ver Dashboard</a></li>

                    </ul>
                </li>

                <li>
                    <div className="profile-details">
                        <div className="profile-content">
                            <img src="src\static\profile.png" alt="Foto de perfil" />
                        </div>
                        <div className="profile-info">
                            <div className='profile_name'>Julián Daza</div>
                            <div className='profile_role'>Administrador</div>
                        </div>
                        <LuLogOut className='logout-btn' />
                        
                    </div>
                </li>

                    
                {/* <li>
                    <div className='theme-options'>
                        <ToggleButton id={'theme_toggle_btn'} onChange={toggleTheme} default_checked={(theme == 'Dark')}/>

                    </div>
                </li> */}



            </ul>
        </div>
        
        <div className={`sidebar-overlay${isSidebarOpen ? ' show' : ''}`} onClick={() => {setIsSidebarOpen(false)}}>


        </div>
        </>

    )
}