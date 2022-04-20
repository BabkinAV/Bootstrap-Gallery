import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Container, Figure, Row, Spinner } from 'react-bootstrap';
import { fetchSingleItem } from '../../redux/uiActions';

const ItemDetails = ({
  singleItemData,
  loaderShown,
  fetchSingleItem,
  errorShown,
}) => {
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

  const memoFetchSingleItem = useCallback(() => {
    fetchSingleItem(itemId);
  }, [fetchSingleItem, itemId]);

  useEffect(() => {
    memoFetchSingleItem();
  }, [memoFetchSingleItem]);

  return (
    <section className="singleGalleryItem mt-5">
      <Container>
        <h1 className="text-center mb-5">Подробности о картинке</h1>
        <Row>
          {loaderShown ? (
            <Spinner animation="border" variant="primary" className="mt-3" />
          ) : !errorShown ? (
            <>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__image">
                  <Figure>
                    <Figure.Image src={singleItemData.url} />
                  </Figure>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="singleGalleryItem__info">
                  <p>
                    <span className="fw-bold">Id:</span> {singleItemData.id}
                  </p>
                  <p>
                    <span className="fw-bold">Title: </span>
                    {singleItemData.title}
                  </p>
                  <p>
                    <span className="fw-bold">Link:</span>{' '}
                    <a href={singleItemData.url}>{singleItemData.url}</a>
                  </p>
                  {button}
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col>
                <p>Данные не найдены</p>
                {button}
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    singleItemData: state.singleItemData,
    loaderShown: state.loaderShown,
    errorShown: state.errorShown,
  };
};

export default connect(mapStateToProps, { fetchSingleItem })(ItemDetails);
