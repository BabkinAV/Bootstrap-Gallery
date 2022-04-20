import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import GalleryItem from '../GalleryItem';
import categories from '../../data_categories';
import { fetchGallery } from '../../redux/uiActions';

const Gallery = ({ fetchGallery, galleryData, loaderShown, errorShown }) => {


  const memoFetchGallery = useCallback(() => {fetchGallery()}, [fetchGallery])

  useEffect(() => {
    memoFetchGallery();
  }, [memoFetchGallery]);

  return (
    <section className="gallery">
      <Container className="pt-5">
        {loaderShown ? (
          <Spinner animation="border" variant="primary" className="mt-3" />
        ) : !errorShown ? (
          categories.map((catEl, index) => {
            return (
              <Row key={index}>
                <h3 className="mb-5">{catEl}</h3>
                {galleryData.slice(index * 6, index * 6 + 6).map((el) => {
                  return (
                    <Col xs={12} md={6} lg={2} key={el.id} className="mb-5">
                      <GalleryItem url={el.url} id={el.id} />
                    </Col>
                  );
                })}
              </Row>
            );
          })
        ) : (
          <Row>
            <Col>
              <p>Данные не найдены</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    galleryData: state.galleryData,
    loaderShown: state.loaderShown,
    errorShown: state.errorShown,
  };
};

export default connect(mapStateToProps, { fetchGallery })(Gallery);
