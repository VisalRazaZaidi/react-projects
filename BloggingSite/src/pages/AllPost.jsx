import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import Service from '../appwrite/config'

function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  Service.getPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents)
    }

  })

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} post={post} className='p-2 w-1/4 '> </div>
          ))}
        </div>

      </Container>
    </div>
  )
}

export default AllPost