import React, { forwardRef } from 'react';
import './Experience.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const Experience = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='experience'>
      <ScrollAnimation animateIn='bounceInDown' duration={2} animateOnce={true}>
        <p style={{ fontSize: '12px' }}>Experience</p>
        <h5
          className='section-heading'
          style={{ color: 'black', fontWeight: '600' }}>
          WORK EXPERIENCE
        </h5>
        <div className='col-md-12'>
          <div className='timeline-centered'>
            <article className='timeline-entry'>
              <div className='timeline-entry-inner'>
                <div className='timeline-icon color-2'>
                  <i className='far fa-edit' />
                </div>
                <div className='timeline-label'>
                  <h2>Junior Programmer</h2>
                  <p>
                    Front-end developer building a multiapplication platform for
                    mobile and desktop using ExtJs and building custom
                    components.
                    <br />
                    I'm currently working in the migration of a web-app making
                    the UX/UI and using React for the front-end framework.
                    <br />
                    Currently I use ExtJs, React, JavaScript, CSS and HTML.
                  </p>
                  <p className='experience-years'>December 2019 - Present</p>
                </div>
              </div>
            </article>
            <article className='timeline-entry'>
              <div className='timeline-entry-inner'>
                <div className='timeline-icon color-1'>
                  <i className='far fa-edit' />
                </div>
                <div className='timeline-label'>
                  <h2>Intern</h2>
                  <p>
                    Front-end developer intern at Delogica building web-apps in
                    ExtJs
                  </p>
                  <p className='experience-years'>
                    October 2018 - December 2019
                  </p>
                </div>
              </div>
            </article>
            <article className='timeline-entry'>
              <div className='timeline-entry-inner'>
                <div className='timeline-icon color-3'>
                  <i className='far fa-edit' />
                </div>
                <div className='timeline-label'>
                  <h2>Teacher</h2>
                  <p>
                    Maths and Physics teacher for kids between 10 and 17 years.
                  </p>
                  <p className='experience-years'>2013-2019</p>
                </div>
              </div>
            </article>
            <article className='timeline-entry'>
              <div className='timeline-entry-inner'>
                <div className='timeline-icon color-4'>
                  <i className='far fa-edit' />
                </div>
                <div className='timeline-label'>
                  <h2>Summer Camp Monitor</h2>
                  <p>
                    Summer camp monitor in YMCA Camp Eberhart. Michigan USA.
                  </p>
                  <p className='experience-years'>Summer 2012 - 2014</p>
                </div>
              </div>
            </article>
            <article className='timeline-entry'>
              <div className='timeline-entry-inner'>
                <div className='timeline-icon color-5'>
                  <i className='far fa-edit' />
                </div>
                <div className='timeline-label'>
                  <h2>Other work</h2>
                  <ul>
                    <li>Video editor and motion graphics designer</li>
                    <li>Photographer</li>
                    <li>Content creator</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
});

export default Experience;
