import React from 'react';
import PropTypes from 'prop-types';
import {SkillItem} from '.';
import reactIcon from '../assets/skill-icons/react.png';
import reactNativeIcon from '../assets/skill-icons/react-native.png';
import drupalIcon from '../assets/skill-icons/drupal.png';
import laravelIcon from '../assets/skill-icons/laravel.png';
import firebaseIcon from '../assets/skill-icons/firebase.png';
import phpIcon from '../assets/skill-icons/php.png';
import gitIcon from '../assets/skill-icons/git.png';
import nodeIcon from '../assets/skill-icons/node.png';
import sassIcon from '../assets/skill-icons/sass.png';
import jqueryIcon from '../assets/skill-icons/jquery.png';
import awsIcon from '../assets/skill-icons/aws.png';

SkillList.propTypes = {
  skills: PropTypes.array,
};

const skillsMap = {
  react: {image: reactIcon, desc: 'React.js', link: 'https://reactjs.org/'},
  reactNative: {image: reactNativeIcon, desc: 'React Native', link: 'https://facebook.github.io/react-native/'},
  drupal: {image: drupalIcon, desc: 'Drupal', link: 'https://www.drupal.org/'},
  laravel: {image: laravelIcon, desc: 'Laravel', link: 'https://laravel.com/'},
  firebase: {image: firebaseIcon, desc: 'Google Firebase', link: 'https://firebase.google.com/'},
  php: {image: phpIcon, desc: 'PHP', link: 'https://www.php.net/'},
  git: {image: gitIcon, desc: 'Git', link: 'https://git-scm.com/'},
  node: {image: nodeIcon, desc: 'Node.js', link: 'https://nodejs.org/'},
  sass: {image: sassIcon, desc: 'Sass', link: 'https://sass-lang.com/'},
  jquery: {image: jqueryIcon, desc: 'jQuery', link: 'https://jquery.com/'},
  aws: {image: awsIcon, desc: 'AWS', link: 'https://aws.amazon.com/'},
};

function SkillList({skills}) {
  return (
    <div style={styles.skillContainer}>
      {skills.map(skill => {
        skill = skillsMap[skill];
        return (
          <SkillItem
            key={skill.desc}
            description={skill.desc}
            image={skill.image}
            link={skill.link}/>
        );
      })}
    </div>
  );
}

const styles = {
  skillContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
};

export default SkillList;
