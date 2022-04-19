import React from 'react';
import { Figure } from 'react-bootstrap';

const GalleryItem = ({url}) => {
  return (
    <Figure>
      <Figure.Image src={url} />
    </Figure>
  );
};

export default GalleryItem;
