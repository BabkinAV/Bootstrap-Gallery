import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Figure, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

const ItemDetails = () => {
  let { itemId } = useParams();
  let navigate = useNavigate();
  const [itemData, setItemData] = useState({});
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/photos/${itemId}`;
    setIsLoaderShown(true);
    axios.get(apiUrl).then((resp) => {
      const imageData = resp.data;
      setItemData(imageData);
    }).then(()=> {
      setIsLoaderShown(false)
    });

  }, [itemId]);

  return (
    <section className="singleGalleryItem mt-5">
      <Container>
        <Row>
          {isLoaderShown ? (
            <Spinner animation="border" variant="primary" className="mt-3" />
          ) : (
            <>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__image">
                  <Figure>
                    <Figure.Image src={itemData.url} />
                  </Figure>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__info">
                  <p>
                    <span className="fw-bold">Id:</span> {itemData.id}
                  </p>
                  <p>
                    <span className="fw-bold">Title: </span>
                    {itemData.title}
                  </p>
                  <p>
                    <span className="fw-bold">Link:</span>{' '}
                    <a href={itemData.url}>{itemData.url}</a>
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Назад
                  </Button>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ItemDetails;
