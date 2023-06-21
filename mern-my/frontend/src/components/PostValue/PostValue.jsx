import React from 'react'



export default function PostValue({fileUpload, title,  text, zagluska}) {
    
  
  return (
  <>
    <div div className="w3-card-4 w3-margin w3-white">
  {!fileUpload ? 
                   <img
                        src={`http://localhost:3000${zagluska}`}
                        alt={zagluska.name}
                        width="888px"
                    />
                
                    
                 : <img
                    //src={ fileUpload}
                        src={URL.createObjectURL(fileUpload)}
                        alt={fileUpload.name}
                        width="888px"
                    />
   } 
      
    </div>
    <h3><b> {title}</b></h3>
      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
    <div className="w3-container">
      <p>{text}</p>
      <div className="w3-row">
    
        <div className="w3-col m8 s12">
          <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
        </div>
    
        <div className="w3-col m4 w3-hide-small">
          <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
        </div>
    
        </div>
        </div>
        </>

  )
}
