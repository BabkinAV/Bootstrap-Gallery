import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryItem from '../GalleryItem';
import data from '../../data';
import categories from '../../data_categories';
import { fetchGallery } from '../../redux/uiActions';

const Gallery = ({ fetchGallery }) => {
  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);
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
                    <GalleryItem url={el.url} id={el.id} />
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

export default connect(null, { fetchGallery })(Gallery);
