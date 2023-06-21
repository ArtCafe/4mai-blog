import React,{useState, useEffect} from 'react'
import { useLocation,  } from "react-router-dom";
import ProfileCard from '../../components/Profileomponents/ProfileCard/ProfileCard'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Headers from '../../components/Headers/Headers'
import Popular_Posts from '../../components/Popular_Posts./Popular_Posts'
import Tags from '../../components/Tags/Tags'
import {  useSelector} from 'react-redux'

export default function Home() {
  const { user, isLoading,} = useSelector((state) => state.auth)

  const { posts, isError, message } = useSelector(
    (state) => state.posts
  )
  const location = useLocation();
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    setFlag()
    if (`${user?.role}` === "1") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[setFlag])




  return (
  <>
   {isLoading ? <div> loadig</div> : <div> <Headers/>
  <div>
    
  <div className="w3-row">

   <div className="w3-col l8 s12">
   
   <Blog flag={flag}/>
   </div>

   <div className="w3-col l4">
   <ProfileCard  user={user}/>
 
              <Popular_Posts flag = {flag} 
            
              posts={posts} />
          
   
   <Tags/>
   </div>
  
 </div>

</div>

<Footer/> </div> }


  </>
  )
}
