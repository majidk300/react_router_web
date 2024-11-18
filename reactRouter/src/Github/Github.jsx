import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data , setData] =useState([])
    //
    // useEffect ( () =>{
    // 
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-xl'>
      Github Followers : {data.followers}

      <div className='flex justify-center items-center'>
      <img src={data.avatar_url} alt="Git Picture"  width={300} className='mt-6 rounded-full' /> 
      </div>

    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const  response = await fetch('https://api.github.com/users/majidk300')

    return response.json();
}
