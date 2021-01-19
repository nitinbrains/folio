import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
             'Would you like to work with me? Awesome! Write to me @ <span style={{fontSize:'25px',fontWeight:'bolder'}}>nitinbrains@gmail.com</span> 
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'nitinbrains@gmail.com'}
            >
              {btn || "Coffee with me"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
