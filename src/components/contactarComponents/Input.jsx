import React from 'react'

export const Input = ({tipo='text', name='', placeholder=''}) => {
  return (
    <input type={tipo} name={name} className="form-control mb-3" placeholder={placeholder}/>
  )
}
