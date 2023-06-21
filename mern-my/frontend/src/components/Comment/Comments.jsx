import React from 'react'

 function Comments () {
  return (
    <>
        <div  className=" w3-animate-opacity">
  <div  style={{padding:32}}>
    <div className="w3-container w3-white">
      <i  
      className="fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge"></i>
      <h2 className="w3-wide">DOWNLOAD</h2>
      <p>Download the app in AppStore, Google Play or Microsoft Store.</p>
      <i className="fa fa-android w3-large"></i> <i className="fa fa-apple w3-large"></i>
       <i className="fa fa-windows w3-large"></i>
      <p>
        <input className="w3-input w3-border" type="text" placeholder="Enter comment"/>
        
        </p>
      <button className="w3-button w3-block w3-padding-large w3-grey w3-margin-bottom" 
     > Comenteaza</button>
    </div>
  </div>
</div>
    </>
  )
}
export default  Comments