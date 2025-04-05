import React from 'react'

export default function Card({img}) {
  return (
    <div style={{width: 'calc(33% - 14px)' , display : 'flex' , flexDirection: 'column'}} >
        <img src={img} alt='card'/>
    </div>
  )
}
