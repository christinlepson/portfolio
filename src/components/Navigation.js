import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Navigation = (props) => {

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'active' : '';
  };

  return (
    <Navbar expand="lg">

      <div className='nav__content'>

        <div className={'nav__header'}>
          <img src='../assets/profile.jpg' alt='Christin Lepson' style={styles.profileImage}/>
          <div className={'nav__header__content'}>
            <h1>Christin Lepson</h1>
            <h2>Full-stack Web Developer</h2>
          </div>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="main-nav">
          <Nav className="nav-main">
            <ul>
              <li className={getNavLinkClass('/')}>
                <NavLink className={'nav-item'} exact to="/">Home</NavLink>
              </li>
              <li className={getNavLinkClass('/fuel-savings')}>
                <NavLink className={'nav-item'} to="/fuel-savings">Demo App</NavLink>
              </li>
              <li className={getNavLinkClass('/about')}>
                <NavLink className={'nav-item'} to="/about">About</NavLink>
              </li>
            </ul>

          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
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
