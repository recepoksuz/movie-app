"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({dt}) => {
  const router  = useRouter()
  return (
    <div>
        <div onClick={()=> router.push(`/movie/${dt?.id}`)} className='m-4 min-w-[470] cursor-pointer shadow-2xl relative text-white'>
            <img width={470} height={300} className='max-w-[300] ' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
            <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
              <div className='text-xl font-bold'>{dt.title}</div>
              <div className=''>Puan: {dt?.vote_average} - Çıkış Tarihi {dt?.release_date}</div>
            </div>
        </div>
    </div>
  )
}

export default Movies