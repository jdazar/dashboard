// ========= ESTILOS =========
import './Header.css'

// ========= ICONOS =========
import { ToggleButton } from './ToggleButton';

// ========= CONTEXTO =========
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export function Header({ isSidebarOpen ,setIsSidebarOpen }){

    const { theme, toggleTheme } = useContext(GlobalContext);

    return(
        <div className='header'>
            <span className='header-title'>Dashboard</span>

            <div className='header-controls'>
                <ToggleButton id={'theme_toggle_btn'} onChange={toggleTheme} default_checked={(theme == 'Dark')}/>
            </div>
        </div>
    )

}