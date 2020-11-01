import React from 'react'

const CardItem =({item, onClick})=>{
    return (
    <li key={item.name} onClick={onClick}>{item.name}</li>
    )
}

export default CardItem
