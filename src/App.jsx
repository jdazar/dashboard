import './App.css'
import { useContext, useState } from 'react';

// ========= SIDEBAR =========
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';

// ========= PAGES ==========
import { Dashboard } from './pages/Dashboard';

// ========= CONTEXTO ==========
import { GlobalContext } from './context/GlobalContext';

function App() {

  // ========= SIDEBAR =========
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {theme} = useContext(GlobalContext);

  return(
    <div id='app_container' data-theme={theme}>
        <div className='content-container' style={{left :'var(--sb-cls-width)',width :'calc(100% - var(--sb-cls-width))'}}>
          <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            
          <Dashboard /> 
        
        </div>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>

    </div>
  )


}

export default App
