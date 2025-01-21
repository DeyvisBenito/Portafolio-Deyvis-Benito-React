import React from 'react'

export const Label = ({nombre=''}) => {
  return (
    <label className="form-label">{nombre}</label>
  )
}
