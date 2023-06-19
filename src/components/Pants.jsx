import React from 'react'
import "./pants.css"

export default function Pants(props) {
  return (
    <div className='conten'>
        <p>Name :{props.name}</p>
        <p>Size :{props.sz}</p>
    </div>
  )
}
