import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import Service from '../appwrite/config'
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {

    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            Service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])


  return post ? (
    <div className='py-8'>
        <PostForm post={post}></PostForm>
    </div>
  ) : null
}

export default EditPost