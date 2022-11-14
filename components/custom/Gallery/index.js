import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const src = '../../../assets/image/assembly_1.jpg'

const Gallery = () => (
  <div id="gallery">
    <Image.Group size='small'>
      <Image src={src} alt= "No Image"/>
      <Image src={src} alt= "No Image"/>
      <Image src={src} alt= "No Image"/>
      <Image src={src} alt= "No Image"/>
    </Image.Group>
  </div>
)

export default Gallery