import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ResumeBlock} from '.';

function ResumePage() {
  return (
    <div className={'resume'}>
      <Container className={'resume__content'}>
        <Row className={'resume__download'}>
          <Col>
            <div className={'resume__download-container'}>
              <a download={'christin-lepson-resume.pdf'} target={'_blank'} className={'resume__download-button'} href={'../public/christin-lepson-resume.pdf'}>
                View as PDF
                <i className="fas fa-file-download"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className={'resume__header'}>
          <Col lg={8}>
            <h1 className={'resume__name'}>Christin Lepson</h1>
            <h2 className={'resume__title'}>Full-stack Web Developer</h2>
            <p>A skilled full-stack software engineer with a specialization in Node.js, PHP, React and React Native,
              Drupal, and Laravel.</p>
          </Col>
          <Col className={'resume__link-list'} lg={4}>
            <div className={'list-container'}>
              <a href={'https://christinlepson.com'}>christinlepson.com</a>
              <a target={'_blank'} href={'https://linkedin.com/in/christinlepson'}>linkedin.com/christinlepson</a>
              <a target={'_blank'} href={'https://github.com/christinlepson'}>github.com/christinlepson</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h3>Technical Skills</h3>
            <ResumeBlock
              noListDecoration
              bullets={[
                'Languages: JavaScript, SQL, CSS, HTML, Java, PHP',
                'Libraries/Frameworks/CMSs: React/React Native, Drupal, Laravel, jQuery',
                'Databases: Oracle, MySQL, SQLite, MongoDB',
                'Other: Git, SASS, Photoshop, Mobile First Responsive Design, gulp.js, Webpack'
              ]}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <ResumeBlock
              title={'Full-Stack Web Developer - Mindgrub Technologies'}
              info={{info: 'May 2019 - Present', isLink: false}}
              bullets={[
                'Design, develop, and maintain front-end and back-end solutions for Mindgrub’s internal and external clients.',
                'Engineer Web and mobile applications in Node.js, PHP, React.js/React Native, Drupal, and Laravel.',
                'Thoroughly test through both automated and manual means all code to prove its effectiveness.',
                'Participate in all steps of the Agile process including Sprint Planning, Sprint Review, Sprint Retrospective, and Daily Scrum.',
              ]}/>
            <ResumeBlock
              title={'Software Development and Graphic Design Freelancer'}
              info={{info: 'October 2017 - May 2019', isLink: false}}
              bullets={[
                'Developed front-end Web interfaces from design mockups using JavaScript, HTML, and CSS.',
                'Created original graphics and event flyers using Adobe Photoshop, Adobe Illustrator, and Sketch App.',
                'Made effective use of troubleshooting skills to resolve client’s concerns and improve user interface design.',
              ]}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <ResumeBlock
              title={'University of Maryland, Global Campus'}
              subtitle={'Software Development and Web Technology, B.S. (4.0/4.0 GPA)'}
              info={'December 2017'}
              noListDecoration
              bullets={[
                'Coursework: Software Security Testing, Secure Software Engineering, Cloud Computing, Web Application Development, Object-Oriented Design, Web Application Security, Database Design',
              ]}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Project Experience</h3>
            <ResumeBlock
              title={'MBRT - Way to Be! Mobile App'}
              subtitle={'React Native/JavaScript/Drupal/PHP'}
              bullets={[
                'Brought UI designs to life by developing custom React Native components, screens, and animations in Node.js.',
                'Gamified a mobile application written in React Native using MobX for state management and GraphQL for data fetching and mutation.',
                'Created custom Drupal entities and views for user game score metric visualizations using PHP.',
              ]}/>
            <ResumeBlock
              title={'Darkweb ID'}
              subtitle={'Laravel/Drupal/AWS/PHP/JavaScript'}
              info={{info: 'idagent.com/dark-web', isLink: true, link: 'https://www.idagent.com/dark-web/'}}
              bullets={[
                'Developed a RESTful API using Amazon Web Services, including Node.js Lambdas, Amazon API Gateway, and Amazon Cognito.',
                'Created RESTful API endpoints and custom data models using PHP and Laravel.',
                'Implemented complex front-end data table interfaces using Drupal, jQuery, SASS, and JavaScript libraries.',
              ]}/>
            <ResumeBlock
              title={'Prometric - Website Redesign'}
              subtitle={'PHP/JavaScript/jQuery/SASS'}
              info={{info: 'prometric.com', isLink: true, link: 'https://www.prometric.com/'}}
              bullets={[
                'Developed a RESTful API using Amazon Web Services, including Node.js Lambdas, Amazon API Gateway, and Amazon Cognito.',
                'Created RESTful API endpoints and custom data models using PHP and Laravel.',
                'Implemented complex front-end data table interfaces using Drupal, jQuery, SASS, and JavaScript libraries.',
              ]}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumePage;
