import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryItem from './GalleryItem';
import data from '../data';
import categories from '../data_categories';

const Gallery = () => {
  return (
    <section className="gallery">
      
      <Container className="pt-5">
        {categories.map((catEl, index) => {
          return (
            <Row key={index}>
              <h3 className="mb-5">{catEl}</h3>
              {data.slice(index * 6, index * 6 + 6).map((el) => {
                return (
                  <Col xs={12} md={6} lg={2} key={el.id} className="mb-5">
                    <GalleryItem url={el.url} />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Gallery;
