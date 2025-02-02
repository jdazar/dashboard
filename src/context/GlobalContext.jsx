import { createContext, useState } from "react";


export const GlobalContext = createContext(undefined);


export function GlobalContextProvider( {children} ){
    

    // ================== TEMA ==================
    const [theme, setTheme] = useState(() => {
        try{
            let dataTheme = localStorage.getItem('data-theme');
            if (dataTheme){
                return(dataTheme);
            }else{
                return('Light');
            }
        }catch(error){
            console.error('Se ha producido un error al leer el tema del localStorage.')
        }
    });
    
    
    // Cambiar el tema (debe ser invocado por un evendo onChange de un checkbox)
    function toggleTheme(e){
        console.l
        if (e.target.checked){
            setTheme('Dark');
            if (localStorage){
                localStorage.setItem('data-theme','Dark');
            }
        }else{
            setTheme('Light');
            if (localStorage){
                localStorage.setItem('data-theme','Light');
            }
        }
    }
    // ============================================




    
    return(
        <GlobalContext.Provider value={{theme, toggleTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}