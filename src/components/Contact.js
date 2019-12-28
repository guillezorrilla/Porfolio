import React, { forwardRef } from 'react';
import './Contact.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = forwardRef((props, ref) => {
  const openMail = () => {
    window.location.href = `mailto:${'guillez94@hotmail.com'}`;
  };

  return (
    <section ref={ref} className='contact'>
      <ScrollAnimation animateIn='zoomInUp' duration={2} offset={50} animateOnce={true}>
        <p style={{ fontSize: '12px' }}>Get in touch</p>
        <h5
          className='section-heading'
          style={{ color: 'black', fontWeight: '600' }}>
          Contact
        </h5>
        <div className='test'>
          <div className='contact-outter'>
            <a
              href='https://www.instagram.com/zorrillaguillermo/?hl=es'
              target='_blank'>
              <div style={{ fontSize: '40px' }} className='contact-box'>
                <i className='fab fa-instagram'></i>
              </div>
              <p>@zorrillaguillermo</p>
            </a>
          </div>
          <div className='contact-outter'>
            <a href='tel:+34608497325'>
              <div style={{ fontSize: '40px' }} className='contact-box'>
                <i className='fa fa-phone'></i>
              </div>
              <p href='tel:+900300400'>+34 608 49 73 25</p>
            </a>
          </div>
          <div className='contact-outter'>
            <a href='#/' onClick={openMail}>
              <div style={{ fontSize: '40px' }} className='contact-box'>
                <i className='far fa-envelope'></i>
              </div>
              <p>guillez94@hotmail.com</p>
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
});

export default Contact;
