import React from 'react'
import './About.scss'
import web from '../assets/icons/front.png'
import design from '../assets/icons/design.png'
import photo from '../assets/icons/photo.png'
import travel from '../assets/icons/travel.png'
import ScrollAnimation from 'react-animate-on-scroll'

const About = React.forwardRef((props, ref) => {
	return (
		<section ref={ref} className='about'>
			<ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true}>
				<p style={{ fontSize: '12px' }}>About me</p>
				<h5 className="section-heading" style={{ color: 'black', fontWeight: '600' }}>WHO AM I?</h5>
				<p style={{ marginTop: '30px' }}>
					Hello my name is <b>Guillermo Zorrilla</b>, i´m a mechanical engineering student and i work as a
					programer in Spain. <br />
					<br />I work as a front-end developer. I`m always trying to learn new things since in this world
					everything goes so fast. Right now I now ExtJs, JavaScript, React, React Native, CSS, HTML and a
					little bit and node.js.
					<br />I also do UI/UX when I have the time and love photography and video editing, I have some
					videos on the internet if you want to check them out.
				</p>
				<div className='card-wrapper'>
					<div className='row' style={{ width: '100%', justifyContent: 'center' }}>
						<ScrollAnimation
							animateIn='fadeInUp'
							duration={1}
							animateOnce={true}
							delay={500}
							offset={50}
							className='col-md-2 col-12 card'
							style={{ borderBottom: '2px solid #2c98f0' }}
						>
							<img className='about-icon' src={web} alt='web-development' />
							<p className='about-card-p'>Front-end</p>
						</ScrollAnimation>

						<ScrollAnimation
							animateIn='fadeInUp'
							duration={1}
							animateOnce={true}
							delay={600}
							offset={50}
							className='col-md-2 col-12 card'
							style={{ borderBottom: '2px solid #f83737' }}
						>
							<img className='about-icon' src={design} alt='web-development' />
							<p className='about-card-p'>Design</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeInUp'
							duration={1}
							animateOnce={true}
							delay={700}
							offset={50}
							className='col-md-2 col-12 card'
							style={{ borderBottom: '2px solid #ffeb39' }}
						>
							<img className='about-icon' src={photo} alt='web-development' />
							<p className='about-card-p'>Photographer</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn='fadeInUp'
							duration={1}
							animateOnce={true}
                            delay={800}
                            offset={50}
							className='col-md-2 col-12 card last-card'
							style={{ borderBottom: '2px solid #fc8600' }}
						>
							<img className='about-icon' src={travel} alt='web-development' />
							<p className='about-card-p'>Travel</p>
						</ScrollAnimation>
					</div>
				</div>
			</ScrollAnimation>
		</section>
	)
})

export default About
