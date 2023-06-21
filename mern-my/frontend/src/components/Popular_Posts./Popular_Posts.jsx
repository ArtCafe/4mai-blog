import React from 'react'

export default function Popular_Posts({posts}) {
  return (
    <>
<div className="w3-card w3-margin">

    <div className="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>

    <ul className="w3-ul w3-hoverable w3-white">
    {posts?.length > 0 ? (
          <div className="w3-card-4 w3-margin w3-white">
            {posts.slice(0,3).map((post) => (

<li className="w3-padding-16"    key={post._id} >
<img   src={post?.image} alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
<span className="w3-large">{post.title}</span><br/>
<span>{post.text.slice(0,12)}</span>
</li>
         
            ))}
          </div>
        ) : (
          <h3>You have not set any posts</h3>
        )}
     
{/* <li className="w3-padding-16">
        <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span className="w3-large">Ipsum</span><br/>
        <span>Praes tinci sed</span>
      </li> 

      <li className="w3-padding-16">
        <img src="https://www.w3schools.com/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span className="w3-large">Dorum</span><br/>
        <span>Ultricies congue</span>
      </li>   
      <li className="w3-padding-16 w3-hide-medium w3-hide-small">
        <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
        <span className="w3-large">Mingsum</span><br/>
        <span>Lorem ipsum dipsum</span>
      </li>   */}
     
    </ul>
  </div>
  <hr/> 
 


    </>
  )
}
