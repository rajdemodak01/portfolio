import {createContext, useContext, useEffect, useState} from "react"
interface ThemeContextType{
    themeMode:string, 
    setTheme:(mode:string)=>void;
}
export const ThemeContext=createContext<ThemeContextType>(
    {
        themeMode:'light',
        setTheme:()=>{}
    }
)
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialTheme=()=>{
        console.log("inside getInitial theme")
        if(typeof window!=="undefined"){//checking this means this block of code will only be executed for browser not in server side
            const storedTheme=localStorage.getItem("theme")
            console.log(storedTheme)
            if(storedTheme)return storedTheme
            return window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";
            //this is a media query for getting the theme of system, it it matches means system is using dark theme else light theme
        }
        return "light";
    }
    console.log("inside themeProvider")
    
    const [themeMode, setThemeMode]=useState(getInitialTheme);
    // console.log(`${themeMode} is set`)
    
    useEffect(()=>{
        console.log("here");
        document.querySelector('html')?.classList.remove("light", "dark")
        document.querySelector('html')?.classList.add(themeMode)
        localStorage.setItem("theme", themeMode);
        console.log(`${themeMode} is set`)
    }, [themeMode])
    const setTheme=(mode:string)=>{
        console.log("here")
        setThemeMode(mode)
    }
    return <ThemeContext.Provider value={{themeMode, setTheme}}>{children}</ThemeContext.Provider>
}

export default function useTheme(){
    return useContext(ThemeContext)
}