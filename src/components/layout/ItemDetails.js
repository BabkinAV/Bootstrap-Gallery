import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Figure, Row, Spinner } from 'react-bootstrap';
import { fetchSingleItem } from '../../redux/uiActions';

const ItemDetails = ({singleItem, showSingleItemLoader, fetchSingleItem, showSingleItemError}) => {
  let { itemId } = useParams();
  let navigate = useNavigate();
  let button = (
    <Button
      variant="primary"
      onClick={() => {
        navigate('/');
      }}
    >
      Назад
    </Button>
  );
  useEffect(() => {
    fetchSingleItem(itemId);
    
  }, [fetchSingleItem, itemId]);



  return (
    <section className="singleGalleryItem mt-5">
      <Container>
        <Row>
          {showSingleItemLoader ? (
            <Spinner animation="border" variant="primary" className="mt-3" />
          ) : !showSingleItemError ? (
            <>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__image">
                  <Figure>
                    <Figure.Image src={singleItem.url} />
                  </Figure>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__info">
                  <p>
                    <span className="fw-bold">Id:</span> {singleItem.id}
                  </p>
                  <p>
                    <span className="fw-bold">Title: </span>
                    {singleItem.title}
                  </p>
                  <p>
                    <span className="fw-bold">Link:</span>{' '}
                    <a href={singleItem.url}>{singleItem.url}</a>
                  </p>
                  {button}
                </div>
              </Col>
            </>
          ) : (
            <><Col><p>Данные не найдены</p>{button}</Col></> 
          )}
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    singleItem: state.singleItem,
    showSingleItemLoader: state.showSingleItemLoader,
    showSingleItemError: state.showSingleItemError
    
  }
}

export default connect(mapStateToProps, {fetchSingleItem})(ItemDetails);
