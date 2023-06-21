import React from 'react';
import PostItem from '../PostItem/PostItem';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner'
import { getPosts, reset } from '../../features/posts/postSlice'


export default function Blog({flag}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  )


  useEffect(() => {
    if (isError) {
      alert(message)
    }


    dispatch(getPosts())

    return () => {
      dispatch(reset())
    }
  }, [ navigate, isError, message, dispatch])

  if (isLoading) {
   return <Spinner />
  }



  return (
  <div  >

    {posts.length > 0 ? (
          <div className="w3-card-4 w3-margin w3-white">
            {posts.map((post) => (
              <PostItem  flag = {flag} 
              key={post._id}
              post={post} 
              />
            ))}
          </div>
        ) : (
          <h3>You have not set any posts</h3>
        )}
    </div>
    
   
  )
}
