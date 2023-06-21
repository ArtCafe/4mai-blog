import React, { useState, useEffect } from "react";
import PostItem from '../../components/PostItem/PostItem'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {  useSelector} from 'react-redux'

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [flag, setFlag] = useState(false);

const { user, isLoading,} = useSelector((state) => state.auth)
  //initalp details
  useEffect(() => {
    if (params?.id)
     getProduct()

     
  }, [params?.id, user]);

  useEffect(() => {
    setFlag(false)
    if (`${user?.role}` === "0"  ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[user])
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/posts/${params.id}`
      );
      setPost(data);
   
    } catch (error) {
      console.log(error);
    }
  };

console.log(user);

  return (
    <div>
<PostItem post ={post} flag={flag}/>

    </div>
  )
}
