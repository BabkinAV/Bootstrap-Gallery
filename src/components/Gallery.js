import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryItem from './GalleryItem';
import data from '../data';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const Gallery = () => {
  return (
    <Container className="pt-5">
      {categories.map((catEl, index) => {
        return (
          <Row key={index}>
            <h2 className="mb-5">{catEl}</h2>
            {data.slice(index * 6, index * 6 + 6).map((el) => {
              return (
                <Col xs={12} md={6} lg={2} key={el.id}>
                  <GalleryItem url={el.url} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Gallery;
