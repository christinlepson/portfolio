import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {SocialMediaList} from '.';
import profileImage from '../assets/profile.jpg';

const Navigation = (props) => {

  const toggler = useRef(null);

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'active' : '';
  };

  const clickToggler = () => {
    toggler.current.click();
  };

  return (
    <Navbar expand="lg">

      <div className='nav__content'>

        <div className={'nav__header'}>
          <img src={profileImage} alt='Christin Lepson' style={styles.profileImage}/>
          <div className={'nav__header__content'}>
            <h1>Christin Lepson</h1>
            <h2>Full-stack Web Developer</h2>
          </div>
        </div>

        <div className={'nav__expander'}>
          <SocialMediaList/>
          <Navbar.Toggle ref={toggler} aria-controls="basic-navbar-nav"/>
        </div>
        <Navbar.Collapse id="main-nav">
          <Nav className="nav-main">
            <ul>
              <li className={getNavLinkClass('/')}>
                <NavLink onClick={clickToggler} className={'nav-item'} exact to="/">Projects</NavLink>
              </li>
              <li className={getNavLinkClass('/resume')}>
                <NavLink onClick={clickToggler} className={'nav-item'} to="/resume">Résumé</NavLink>
              </li>
              <li className={getNavLinkClass('/contact')}>
                <NavLink onClick={clickToggler} className={'nav-item'} to="/contact">Contact Me</NavLink>
              </li>
            </ul>

          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
};

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
};

const styles = {
  profileImage: {
    borderRadius: '100%',
    width: 150,
    height: 150,
    marginBottom: 20,
    boxShadow: '0px 0px 24px -1px rgba(0,0,0,0.4)',
  },
};

export default withRouter(Navigation);
