import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const GalleryItem = ({ url }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);

  return (
    <div
      className="gallery__item"
      onMouseEnter={() => setIsButtonShown(true)}
      onMouseLeave={() => setIsButtonShown(false)}
    >
      <Figure>
        <Figure.Image src={url} />
      </Figure>
      {isButtonShown && <Button variant="primary">Подробнее</Button>}
    </div>
  );
};

export default GalleryItem;
