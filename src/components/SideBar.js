import React from 'react'
import './Sidebar.scss'
import fotoPerfil from '../assets/pp.jpg'

const SideBar = (props) => {
	return (
		<div className='sidebar'>
			<img className='foto-perfil' src={fotoPerfil} alt='' />
			<p className='name'>Guillermo Zorrilla</p>
			<p style={{ color: '#929292' }}>Programmmer | Design | Engineer</p>
			<nav>
				<ul>
					<li>
						<p onClick={() => {props.sectionClicked('home')}}>HOME</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('about')}}>ABOUT</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('skills')}}>SKILLS</p>
					</li>
					<li>
						<p>EDUCATION</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('experience')}}>EXPERIENCE</p>
					</li>
					<li>
						<p>WORK</p>
					</li>
					<li>
						<p>CONTACT</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default SideBar
