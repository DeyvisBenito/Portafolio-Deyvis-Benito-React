import React from 'react'

export const TextArea = ({name='', placeholder=''}) => {
  return (
    <textarea className="form-control" name={name} placeholder={placeholder}/>
  )
}
