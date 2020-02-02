import React from 'react';
import PropTypes from 'prop-types';

SkillItem.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function SkillItem({image, link, description}) {
  return (
    <div>
      <a target={'blank'} style={styles.item} href={link}>
        <img style={styles.image} src={image} alt={description}/>
      </a>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  item: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 60,
    height: 60,
  },
  description: {
    fontSize: 12,
    marginTop: 5,
  },
};

export default SkillItem;
