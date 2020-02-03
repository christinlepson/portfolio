import React from 'react';

function ContactPage() {
  return (
    <div className={'contact'}>
      <div className={'contact__container'}>
        <h1>{'Let\'s Work Together'}</h1>
        <dl className="dl dl-vertical">
          <dt>E-mail:</dt>
          <dd>
            <a href="mailto:christin@protonmail.com"><i className="icon fa fa-envelope"></i> christin@protonmail.com</a>
          </dd>
          <dt>LinkedIn:</dt>
          <dd>
            <a target={'_blank'} href="https://www.linkedin.com/in/christinlepson"><i className="icon fab fa-linkedin"></i> christinlepson</a>
          </dd>
          <dt>Github:</dt>
          <dd>
            <a target={'_blank'} href="https://github.com/christinlepson"><i className="icon fab fa-github"></i> christinlepson</a>
          </dd>

        </dl>
      </div>
    </div>
  );
}

export default ContactPage;
