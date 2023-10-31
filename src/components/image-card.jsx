import React from 'react'

const ImageCard = ({ src, key, alt, className }) => {
  return (
    <img
      key={src}
      className={className}
      src={src}
      alt={alt}
    />
  )
}

export default ImageCard