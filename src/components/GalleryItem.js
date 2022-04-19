import React, { useState } from 'react';
import { Figure } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GalleryItem = ({ url, id }) => {
  const [isButtonShown, setIsButtonShown] = useState(false);
  let navigate = useNavigate();

  return (
    <div
      className="gallery__item"
      onMouseEnter={() => setIsButtonShown(true)}
      onMouseLeave={() => setIsButtonShown(false)}
    >
      <Figure>
        <Figure.Image src={url} />
      </Figure>
      {isButtonShown && <Button variant="primary" onClick={() => navigate(`/${id}`)}>Подробнее</Button>}
    </div>
  );
};

export default GalleryItem;
