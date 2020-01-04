import React, { useState, useEffect, useCallback } from 'react';
import SideBar from './components/SideBar';
import Home from './components/Home';
import './App.scss';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Coffe from './components/Coffe';

function App(props) {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [style, setStyle] = useState('sidebar-button')
  const home = React.createRef();
  const about = React.createRef();
  const skills = React.createRef();
  const experience = React.createRef();
  const education = React.createRef();
  const contact = React.createRef();

  const openSideDrawer = () => {
    if(openSidebar){
      setOpenSidebar(false)
    } else {
      setOpenSidebar(true)
    }
  }

  const closeSideDrawer = () => {
    if(openSidebar){
      setOpenSidebar(false)
    }
  }
  useEffect(useCallback(() => {
    if(openSidebar) {
      setStyle('sidebar-button open-button')
      let sidebarWidth = document.getElementsByClassName('sidebar')[0].offsetWidth
      let sideBarButton =  document.getElementsByClassName('sidebar-button')[0]
      let newWidth = sidebarWidth - 60
      sideBarButton.style.left = `${newWidth}px`
    } else {
      setStyle('sidebar-button')
      let sideBarButton =  document.getElementsByClassName('sidebar-button')[0]
      sideBarButton.style.left = '10px'
    }
  },[openSidebar]))

  const executeScroll = content => {
    switch (content) {
      case 'home':
        home.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        about.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skills.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        education.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experience.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contact.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        console.log('Hola');
    }
  };

  return (
    <div className='container-fluid App'>
      <button className={style} onClick={openSideDrawer}>
        <i className={openSidebar ? 'fa fa-chevron-left' : 'fas fa-bars'} />
      </button>
      <SideBar openSidebar={openSidebar} sectionClicked={executeScroll} closeSideDrawer={openSideDrawer} />
      <div onClick={closeSideDrawer}>
        <Home ref={home} />
        <About ref={about} />
        <Coffe />
        <Skills ref={skills} />
        <Education ref={education} />
        <Experience ref={experience} />
        <Contact ref={contact} />
      </div>
    </div>
  );
}

export default App;
