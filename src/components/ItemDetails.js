import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import data from '../data';

const ItemDetails = () => {
  return (
    <section className="singleGalleryItem mt-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="singleGalleryItem__image">
              <Figure>
                <Figure.Image src="https://via.placeholder.com/600/92c952" />
              </Figure>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="singleGalleryItem__info">
              <p>
                <span className="fw-bold">Id:</span> {data[0].id}
              </p>
              <p>
                <span className="fw-bold">Title: </span>
                {data[0].title}
              </p>
              <p>
                <span className="fw-bold">Link:</span>{' '}
                <a href={data[0].url}>{data[0].url}</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItemDetails;
