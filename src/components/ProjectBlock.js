import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Image} from 'react-bootstrap';

function ProjectBlock({image, imageAlt, title, mainDescription, subTitle, secondDescription}) {
  return (
    <Container>
      <Row className={'project'} style={styles.container}>
        <Col md={11}>
          <Container className={'project__container'}>
            <Row className={'project__content row'}>
              <Col lg={5}>
                <h3>{title}</h3>
                <p>{mainDescription}</p>
                <h4>{subTitle}</h4>
                <p>{secondDescription}</p>
              </Col>
              <Col lg={7}>
                <Image fluid className={'project__image'} src={image} alt={imageAlt}/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
};

ProjectBlock.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  mainDescription: PropTypes.string,
  subTitle: PropTypes.string,
  secondDescription: PropTypes.string,
};

export default ProjectBlock;
