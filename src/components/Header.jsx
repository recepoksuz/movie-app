"use client"
import React, { useEffect } from 'react'
import { BsSearch } from "react-icons/bs"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Header = () => {
  const [keyword, setKeyword] = useState("")
  const router = useRouter()
  const [logo, setLogo] = useState("https://i.hizliresim.com/8p35qo8.png")

  let {systemTheme, theme, setTheme} = useTheme()
  const themeMode = theme === "system" ? systemTheme : theme

  const handleKeyUp = (event)=>{
    if(event.key === "Enter"){
      router.push(`/search/${event.target.value}`)
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem("theme"))
    if(localStorage.getItem("theme") === "light"){
      setLogo("https://i.hizliresim.com/8p35qo8.png")
    }else {
      setLogo("https://i.hizliresim.com/dqbcaex.png")
    }
  }, [theme]);

  const menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/signin"
    }
  ]
  
  return (
    <div className='flex justify-center items-center gap-6 h-9 p-8 '>
      <img onClick={() => router.push("/")} src={`${logo}`} className='h-9 hover:cursor-pointer' />
      {/* console.log(localStorage.getItem("theme")) */}
      <div className='flex flex-1 justify-center gap-3 items-center border border-slate-500 rounded-lg p-2'>
        <input type="text" onKeyUp={handleKeyUp} onChange={(e)=>setKeyword(e.target.value)} placeholder='Film Arayın' className='flex-1 h-6 p-2 outline-none bg-transparent' />
        <BsSearch size={20} />
      </div>
      {
        menu.map((item, i) => (
          <MenuItem item={item} key={i} />
        ))
      }
      <ThemeComp />
    </div>
  )
}

export default Header