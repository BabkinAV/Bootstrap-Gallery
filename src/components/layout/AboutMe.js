import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import avatarImg from '../../assets/images/ava_01_big.jpg';

const AboutMe = () => {
  return (
    <section className="About mt-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="About__image">
              <Figure>
                <Figure.Image src={avatarImg} />
              </Figure>
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="About__info">
              <p>Web-разработчик с опытом выполнения коммерческих заказов на международных площадках. Развиваюсь во Frontend c 2018 года (Coursera, Udemy). Выполнил несколько самостоятельных проектов на GitHub, в том числе full-stack (MERN) в составе команд. Отличное знание английского языка (рабочий разговорный уровень). В настоящий момент рассматриваю возможность перехода полностью на работу Frontend-разработчиком, в приоритете удаленный либо гибридный режим, постоянное присутствие в офисе также обсуждается.</p>
              <h3>Mой стек технологий:</h3>
              <ul>
                <li>Semantic HTML</li>
                <li>CSS, Flexbox, Grid</li>
                <li>Javascript & JQuery, AJAX, Typescript</li>
                <li>CSS frameworks and preprocessors: Bootstrap, SCSS</li>
                <li>React, Redux, NextJS, ContextAPI, MaterialUI</li>
                <li>Node.JS, Express, MongoDB, Firebase (базовый уровень)</li>
                <li>Git & GitHub</li>
                <li> PHP, MySQL</li>
                <li>npm scripts and Module Bundlers: Webpack, Parcel, Gulp.</li>
                <li>Wordpress architecture & functions, Woocommerce</li>
                <li>Docker</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe