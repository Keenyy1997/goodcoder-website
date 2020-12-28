import React from 'react';

function ImageComponent({
  alt = 'No Description Available.',
  src,
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  );
}

export default ImageComponent;
