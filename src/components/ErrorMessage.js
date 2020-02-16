import React from 'react'

const ErrorMessage = (props) => {
  const { message } = props
  return (
    <div className="error-message">
      <h6><p>{message}</p></h6>
    </div>
  )
}

export default ErrorMessage;