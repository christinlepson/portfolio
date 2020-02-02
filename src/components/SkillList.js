import React from 'react';
import PropTypes from 'prop-types';
import {SkillItem} from '.';

SkillList.propTypes = {
  skills: PropTypes.array,
};

const skillsMap = {
  react: {image: '../assets/skill-icons/react.png', desc: 'React.js', link: 'https://reactjs.org/'},
  reactNative: {image: '../assets/skill-icons/react-native.png', desc: 'React Native', link: 'https://facebook.github.io/react-native/'},
  drupal: {image: '../assets/skill-icons/drupal.png', desc: 'Drupal', link: 'https://www.drupal.org/'},
  laravel: {image: '../assets/skill-icons/laravel.png', desc: 'Laravel', link: 'https://laravel.com/'},
  firebase: {image: '../assets/skill-icons/firebase.png', desc: 'Google Firebase', link: 'https://firebase.google.com/'},
  php: {image: '../assets/skill-icons/php.png', desc: 'PHP', link: 'https://www.php.net/'},
  git: {image: '../assets/skill-icons/git.png', desc: 'Git', link: 'https://git-scm.com/'},
  node: {image: '../assets/skill-icons/node.png', desc: 'Node.js', link: 'https://nodejs.org/'},
  sass: {image: '../assets/skill-icons/sass.png', desc: 'Sass', link: 'https://sass-lang.com/'},
  jquery: {image: '../assets/skill-icons/jquery.png', desc: 'jQuery', link: 'https://jquery.com/'},
  aws: {image: '../assets/skill-icons/aws.png', desc: 'AWS', link: 'https://aws.amazon.com/'},
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
