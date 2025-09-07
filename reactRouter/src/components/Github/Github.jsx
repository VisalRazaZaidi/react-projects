import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/VisalRazaZaidi')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='flex items-center flex-col-reverse text-center m-4 bg-blue-900 text-white p-4 text-3xl rounded-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-4xl flex justify-center'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/VisalRazaZaidi')
    return response.json()
}