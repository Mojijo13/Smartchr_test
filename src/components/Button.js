import './Button.css'
import React from 'react'

const Button = ({ text, onClick, className = "" }) => {

  return (
    <a role="button" className={`button ${className}`} onClick={onClick}>{ text }</a>
  )
}

export default Button