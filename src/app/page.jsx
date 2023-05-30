import Movies from '@/components/Movies'
import React from 'react'

const page = async ({searchParams}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=3fd5286eb94425cf36a0852c37e24dc1&language=en-US&page=1`, 
  {next: {validate: 10000}})
  const data = await res.json();

  return (
    <div className="flex flex-wrap justify-center">
      {
        data?.results?.map((dt, i)=> (
          <Movies key={i} dt = {dt}/>
        ))
      }
    </div>
  )
}

export default page