"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from "next/navigation"

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")
    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "Gösterimdekiler",
            url: "now-playing"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]
  return (
    <div className='m-3 p-3 flex justify-center items-center bg-gray-100 dark:bg-gray-900 gap-7'>
        {
            tabs.map((tab, i)=>(
                <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-[#5E17EB]" : ""}`} href={`/?genre=${tab.url}`}> {tab.name} </Link>
            ))
        }
    </div>
  )
}

export default Tabs