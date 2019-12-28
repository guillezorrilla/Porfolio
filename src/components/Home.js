import React from 'react'
import './Home.scss'
import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

const FadeInUpAnimation = keyframes`${fadeInDown}`
const FadeInUpDiv = styled.div`animation: 2s ${FadeInUpAnimation};`

const Home = () => {
	return (
		<div>
			<div className='home'>
				<div className='flexslider' style={{ height: '100%' }}>
					<div className='list-img' style={{ height: '100%' }}>
						<div className='container-fluid' style={{ height: '100%' }}>
							<FadeInUpDiv className='desc' style={{ height: '100%' }}>
								<h1>
									Hi! <br /> Im Guillermo
								</h1>
								<h5>
									Im a progammer who likes to try new things
								</h5>
								<button type='button' className='btn btn-outline-dark cv-button'>
									DOWNLOAD CV<i className='fa fa-download icon' />
								</button>
							</FadeInUpDiv>
						</div>
					</div>
                </div>
			</div>
		</div>
	)
}

export default Home
