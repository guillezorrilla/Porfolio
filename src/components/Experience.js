import React, { forwardRef } from 'react'
import './Experience.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const Experience = forwardRef((props, ref) => {
	return (
		<section ref={ref} className='experience'>
			<ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true}>
				<p style={{ fontSize: '12px' }}>Experience</p>
				<h5 className="section-heading" style={{ color: 'black', fontWeight: '600' }}>WORK EXPERIENCE</h5>
				<div className='col-md-12'>
					<div className='timeline-centered'>
						<article className='timeline-entry'>
							<div className='timeline-entry-inner'>
								<div className='timeline-icon color-1'>
									<i className='far fa-edit' />
                                </div>
                                <div className="timeline-label">
                                    <h2>Front-end Developer</h2>
                                    <p>Front-end developer at Delogica building web-apps in ExtJs</p>
                                </div>
							</div>
						</article>
					</div>
				</div>
			</ScrollAnimation>
		</section>
	)
})

export default Experience
