import React from 'react'
import './Sidebar.scss'
import fotoPerfil from '../assets/pp.jpg'

const SideBar = () => {
	return (
		<div className='sidebar'>
			<img className='foto-perfil' src={fotoPerfil} alt='' />
			<p className='name'>Guillermo Zorrilla</p>
			<p style={{ color: '#929292' }}>Programmmer | Design | Engineer</p>
			<nav>
				<ul>
					<li>
						<a href='/'>HOME</a>
					</li>
					<li>
						<a href='/'>ABOUT</a>
					</li>
					<li>
						<a href='/'>SKILLS</a>
					</li>
					<li>
						<a href='/'>EDUCATION</a>
					</li>
					<li>
						<a href='/'>EXPERIENCE</a>
					</li>
					<li>
						<a href='/'>WORK</a>
					</li>
					<li>
						<a href='/'>CONTACT</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default SideBar
