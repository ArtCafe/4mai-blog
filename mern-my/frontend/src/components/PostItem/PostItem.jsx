import React, {useState} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
//import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import FormComment from '../Comment/CommentForm/FormComment';
import Comments from '../Comment/Comments';



export default function PostItem({ flag, post}) {
  const params = useParams();
const navigate = useNavigate();


  const handleDelete = async () => {
    
    try {
     await axios.delete(
        `/api/posts/${params.id}`
      );
     // setPost(data);
   
    } catch (error) {
      console.log(error);
    }
    navigate("/seting")
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 // <div >{flag && <Link to={`post/${post?._id}`}>redactare</Link>}</div>

  return (
    <>
  
    <div >{flag ? <button   onClick={handleDelete}> x </button>: <h2></h2>}</div>
     <Link to ={`/post/${post._id}`}>
    <div  >

                   <img
                        src={post?.image}
                        alt="post image"
                        style={{width:"100%"}}
                      //  width="888px"
                    />
                
    </div>
         </Link>
    <div className="w3-container">
        <h3><b> {post?.title}</b></h3>
      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
      <p>{post?.text}</p>
      <div className="w3-row">
    
        <div className="w3-col m8 s12">
        <Link to ={`/post/${post._id}`}>
         
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
        </Link>
        </div>

        <div className="w3-col m4 w3-hide-small">
      
             <FormComment  closeModal={closeModal} modalIsOpen={modalIsOpen}/>

             <p><span className="w3-padding-large w3-right"><b onClick={openModal}>
          
            Comments </b>   <span className="w3-tag">0</span></span></p>
            
        </div>
    
        </div>
        </div>
       
        </>
  )
}
