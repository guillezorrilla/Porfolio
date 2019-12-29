import React from 'react'
import './Sidebar.scss'
import fotoPerfil from '../assets/pp.jpg'

const SideBar = (props) => {
	
	return (
		<div className={props.openSidebar ? 'sidebar sidebar-open': 'sidebar'}>
			<img className='foto-perfil' src={fotoPerfil} alt='' />
			<p className='name'>Guillermo Zorrilla</p>
			<p className='sidebar-carreras' style={{ color: '#929292' }}>Programmmer | Design | Engineer</p>
			<nav>
				<ul onClick={() => {props.closeSideDrawer()}}>
					<li>
						<p onClick={() => {props.sectionClicked('home') }}>HOME</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('about')}}>ABOUT</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('skills')}}>SKILLS</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('education')}}>EDUCATION</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('experience')}}>EXPERIENCE</p>
					</li>
					<li>
						<p onClick={() => {props.sectionClicked('contact')}}>CONTACT</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default SideBar
