import { Search } from 'lucide-react'
import React from 'react'

const ImagesCollectionGrid = ({image,name}) => {
  return (
    <div >
      <img src={image} alt="collections" />
      <i><Search/></i>
      <p>{name}</p>
    </div>
  )
}

export default ImagesCollectionGrid
