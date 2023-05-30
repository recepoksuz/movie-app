import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({ params }) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd5286eb94425cf36a0852c37e24dc1&query=${params.keyword}&language=en-US&page=1`,
        { next: { validate: 10000 } })
    const data = await res.json();
    return (
        <div className="flex flex-wrap justify-center">
            {
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            }
        </div>
    )
}

export default Page