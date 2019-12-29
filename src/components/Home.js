import React from 'react'
import './Home.scss'
import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'
import CV from '../assets/documents/CVZorrillaGuillermo.pdf'

const FadeInUpAnimation = keyframes`${fadeInDown}`
const FadeInUpDiv = styled.div`animation: 2s ${FadeInUpAnimation};`

const Home = React.forwardRef((props, ref) => {
	return (
		<section ref={ref}>
		<div className='home'>
			<div className='flexslider' style={{ height: '100%' }}>
				<div className='list-img' style={{ height: '100%'}}>
					<div className='container-fluid' style={{ height: '100%' }}>
						<FadeInUpDiv className='desc' style={{ height: '100%' }}>
							<h1>
								Hi! <br /> Im Guillermo
							</h1>
							<h5>
								I'm a mechanical engineer and a programmer
							</h5>
							<a href={CV} download="CV Guillermo Zorrilla.pdf">
							<button type='button' className='btn btn-outline-dark cv-button'>
								DOWNLOAD CV<i className='fa fa-download icon' />
							</button>
							</a>
						</FadeInUpDiv>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
})

export default Home
