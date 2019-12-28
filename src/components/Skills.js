import React from 'react'
import './Skills.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const Skills = React.forwardRef((props, ref) => {
	return (
		<section ref={ref} className='skills'>
			<ScrollAnimation animateIn='fadeInLeft' duration={2} animateOnce={true}>
				<p style={{ fontSize: '12px' }}>Skillset</p>
				<h5 className="section-heading" style={{ color: 'black', fontWeight: '600' }}>MY SKILLS</h5>
				<div className='row'>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>ExtJs</h5>
							<div className='progress'>
								<div
									className='progress-bar color-1'
									role='progressbar'
									style={{ width: '90%', background: '#2fa499' }}
									aria-valuenow='90'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span >90%</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>JavaScript</h5>
							<div className='progress'>
								<div
									className='progress-bar color-2'
									role='progressbar'
									style={{ width: '85%', background: '#f9bf3f' }}
									aria-valuenow='80'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span>80%</span>
								</div>
							</div>
						</div>
					</div>
                </div>
                <div className='row'>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>React</h5>
							<div className='progress'>
								<div
									className='progress-bar color-3'
									role='progressbar'
									style={{ width: '70%' }}
									aria-valuenow='70'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span>70%</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>Photoshop</h5>
							<div className='progress'>
								<div
									className='progress-bar color-4'
									role='progressbar'
									style={{ width: '60%', background: '#4054b2' }}
									aria-valuenow='60'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span>60%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
                <div className='row'>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>CSS</h5>
							<div className='progress'>
								<div
									className='progress-bar color-5'
									role='progressbar'
									style={{ width: '70%', background: '#ec5453' }}
									aria-valuenow='70'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span>70%</span>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-4'>
						<div className='progress-wrap skills-wrap'>
							<h5>HTML</h5>
							<div className='progress'>
								<div
									className='progress-bar color-6'
									role='progressbar'
									style={{ width: '80%', background: '#a84cb8' }}
									aria-valuenow='80'
									aria-valuemin='0'
									aria-valuemax='100'
								>
									<span>80%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>
		</section>
	)
})

export default Skills
