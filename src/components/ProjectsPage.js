import React from 'react';
import {ProjectBlock} from '.';
import mbrtImage from '../assets/project-mbrt.png';
import darkwebImage from '../assets/project-darkweb.png';
import prometricImage from '../assets/project-prometric.png';

const ProjectsPage = () => {
  return (
    <div className={'projects'}>
      <ProjectBlock
        skills={['reactNative', 'node', 'firebase', 'drupal', 'git']}
        image={mbrtImage}
        imageAlt={'Darkweb ID'}
        title={'Way to Be! Mobile App'}
        mainDescription={'Way To Be! is a mobile app created for the Maryland Business Roundtable for Education. This fun app helps children in Maryland public schools '
        + 'navigate their way to college, learn about potential career paths, and have fun in the process. This gamified app allows users to earn points in the game by completing quizzes '
        + 'and defeating bosses.'}
        subTitle={'Technologies'}
        secondDescription={'The Way To Be! app was written in Node.js using React Native. The app uses MobX for state management and Apollo/GraphQL for data fetching and mutation. '
        + 'The back-end of the application is supported by a Drupal 8 site that exposes information via GraphQL.'}/>

        <ProjectBlock
          alternate
          link={'https://www.idagent.com/dark-web/'}
          skills={['drupal', 'laravel', 'php', 'sass', 'jquery', 'aws', 'node', 'git']}
          image={darkwebImage}
          imageAlt={'Dark Web ID'}
          title={'ID Agent: Dark Web ID'}
          mainDescription={'ID Agent\'s Dark Web ID is a dark web monitoring platform that allows organizations to monitor compromised or stolen employee and customer data. '
          + 'The platform also allows its partners to simulate controlled Phishing attacks to strengthen employee awareness and mitigate real-life threats.'}
          subTitle={'Technologies'}
          secondDescription={'Dark Web ID is Drupal 7 site hosted on AWS that pulls compromised data information from various APIs. '
          + 'Work for the site included creating an updated back-end system for the site in Laravel to accommodate increasing demand; '
          + 'creating complex tabular interfaces using Sass/CSS, jQuery, and JavaScript; and developing RESTful API services in Node.js and AWS Lambdas.'}/>

      <ProjectBlock
        link={'https://www.prometric.com/'}
        skills={['drupal', 'php', 'sass', 'jquery', 'git']}
        image={prometricImage}
        imageAlt={'Prometric'}
        title={'Prometric'}
        mainDescription={'Prometric is a leading provider of technology-enabled testing and assessment solutions to many of the world’s most recognized '
        + 'licensing and certification organizations, academic institutions, and government agencies. They support more than 7 million test takers annually '
        + 'at testing locations in more than 160 countries around the world.'}
        subTitle={'Technologies'}
        secondDescription={'The Prometric project was a complete site migration and redesign using Drupal 8. UI designs for the new site were brought to life '
        + 'using PHP, Sass/CSS, JavaScript, jQuery, and Twig templates.'}/>

    </div>
  );
};

export default ProjectsPage;
