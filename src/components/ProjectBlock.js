import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {SkillList} from '.';

function ProjectBlock({image, imageAlt, title, mainDescription, subTitle, link, secondDescription, alternate, skills}) {
  return (
    <div className={alternate ? 'project-gray' : 'project-white'}>
      <Container>
        <Row className={'project'} style={styles.container}>
          <Col md={11}>
            <Container className={'project__container'}>
              <Row className={'project__content row'}>
                <Col xl={{span: 5, order: alternate ? 2 : 1}}>
                  <h3>{title}</h3>
                  <p>{mainDescription}</p>
                  <h4>{subTitle}</h4>
                  <p>{secondDescription}</p>
                </Col>
                <Col xl={{span: 7, order: alternate ? 1 : 2}}>
                  {link
                    ? <a href={link} target={'blank'}><Image fluid className={'project__image'} src={image} alt={imageAlt}/></a>
                    : <Image fluid className={'project__image'} src={image} alt={imageAlt}/>
                  }
                </Col>
              </Row>
              <Row className={'project__technologies'}>
                <Col>
                  <h5>Technologies</h5>
                  <SkillList skills={skills}/>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
};

ProjectBlock.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  link: PropTypes.string,
  subTitle: PropTypes.string,
  secondDescription: PropTypes.string,
  alternate: PropTypes.bool,
};

export default ProjectBlock;
