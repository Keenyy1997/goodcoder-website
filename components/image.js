import React from 'react';

// Media
import { getStrapiMedia } from '../lib/media';

function ImageComponent({
  alt,
  src,
  ...props
}) {

  return (
    <img
      src={getStrapiMedia(src)}
      alt={alt || 'No Description Available.'}
      {...props}
    />
  );
}

export default ImageComponent;
