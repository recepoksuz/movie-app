import React from 'react'

const getData = async(id)=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3fd5286eb94425cf36a0852c37e24dc1`)
    console.log(data)
    return data.json()
}

const Page = async ({params}) => {
    const id = params.id
    const dt = await getData(id)
  return (
    <div className='flex w-fullbottom-0 text-white'> 
        <img className='fill absolute' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
        <div className='absolute p-7'>
            <div className='font-bold text-4xl'>{dt?.title}</div>
            <div className='font-semibold text-xl my-3'>Puan: {dt?.vote_average} - Çıkış Tarihi {dt?.release_date}</div>
            <div className='w-3/5 text-xl'>{dt?.overview}</div>
        </div>
    </div>
  )
}

export default Page