import { useContext , createContext, useState, useEffect} from "react";
const themeContext = createContext();

export const useTheme = ()=>{
    return useContext(themeContext);
}

export const ThemeProvider=({children})=>{
    const[isDarkMode,setIsdarkMode]=useState(true);

    const ToggleTheme=()=>{
        setIsdarkMode(prevState=>!prevState);
    }
    const theme = isDarkMode? "dark":"light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[theme])

    return <themeContext.Provider value={{theme,ToggleTheme}}>
        {children}
    </themeContext.Provider>
}