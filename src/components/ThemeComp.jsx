"use client"
import { useEffect } from 'react'
import {CiDark } from "react-icons/ci"
import {MdOutlineDarkMode} from "react-icons/md"
import { useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    let {systemTheme, theme, setTheme} = useTheme()

    const themeMode = theme === "system" ? systemTheme : theme

    useEffect(() => setMounted(true)
    ,[])

  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?
                <MdOutlineDarkMode onClick={()=> setTheme("light")} className='cursor-pointer' size={25}/> : 
                <CiDark onClick={()=> setTheme("dark")} className='cursor-pointer' size={25}/>
            )
        }
    </div>
  )
}

export default ThemeComp