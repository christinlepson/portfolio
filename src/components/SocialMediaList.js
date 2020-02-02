import React from 'react';

function SocialMediaList() {
  return (
    <div className={'social-media-list'}>
      <a target={'blank'} href={'mailto:christin@protonmail.com'} alt={'email: christin@protonmail.com'}>
        <i style={styles.icon} className="fa fa-envelope"/>
      </a>
      <a target={'blank'} href={'https://www.linkedin.com/in/christinlepson/'} alt={'linkedin: Christin Lepson'}>
        <i style={styles.icon} className="fab fa-linkedin"/>
      </a>
      <a target={'blank'} href={'https://github.com/christinlepson'} alt={'github: Christin Lepson'}>
        <i style={styles.icon} className="fab fa-github"/>
      </a>
    </div>
  );
}

const styles = {
  icon: {
    opacity: 0.8,
    fontSize: 26,
    marginRight: 15,
    color: 'white',
  }
};

export default SocialMediaList;
