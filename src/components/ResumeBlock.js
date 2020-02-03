import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

function ResumeBlock({title, subtitle, startDate, info, bullets, noListDecoration}) {
  return (
    <Container>

      {title &&
      <Row>

        <Col lg={info ? 9 : 12}>
          <h4>{title}</h4>
          {subtitle &&
          <p className={'resume__item-subtitle'}>{subtitle}</p>
          }
        </Col>

        {info &&
        <Col className={'resume__aside-info'} lg={3}>
          {info.isLink
            ? <a target={'_blank'} href={info.link}>{info.info}</a>
            : <span>{info.info}</span>}
        </Col>
        }

      </Row>
      }

      <Row>
        <Col>
          <ul className={noListDecoration ? 'resume__bullets resume__bullets--no-decoration' : 'resume__bullets'}>
            {
              bullets.map(bullet => {
                  const bulletJsx = noListDecoration
                    ? <span><i><strong>{bullet.split(':')[0]}</strong></i>:{bullet.split(':')[1]}</span>
                    : <span>{bullet}</span>;
                  return (
                    <li
                      style={{listStyle: noListDecoration ? 'none' : 'disc'}}
                      key={bullet}>
                      {bulletJsx}
                    </li>
                  );
                }
              )}
          </ul>
        </Col>
      </Row>

    </Container>
  );
}

ResumeBlock.proptypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  info: PropTypes.object,
  bullets: PropTypes.array.isRequired,
  noListDecoration: PropTypes.bool,
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default ResumeBlock;
