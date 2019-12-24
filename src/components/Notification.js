import React from 'react'


const Notification = (props) =>{
  const { notif } = props
  return(
    <div className="notification">
      <h4><p>{notif}</p></h4>
    </div>
  )

}

export default Notification