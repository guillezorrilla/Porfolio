import React from 'react';
import SideBar from './components/SideBar'
import Home from './components/Home'
import './App.scss';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Coffe from './components/Coffe';

function App(props) {
  const home = React.createRef();
  const about = React.createRef();
  const skills = React.createRef();
  const experience = React.createRef()
  const education = React.createRef()
  const contact = React.createRef()


  const executeScroll = (content) => {
    switch(content){
      case 'home':
        home.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'about':
        about.current.scrollIntoView({behavior: 'smooth'})
      break;
      case 'skills':
        skills.current.scrollIntoView({behavior:'smooth'})
        break
      case 'experience': 
        experience.current.scrollIntoView({behavior: 'smooth'})
        break
      case 'education':
          experience.current.scrollIntoView({behavior: 'smooth'})
          break
      default:
        console.log('Hola')
    }
  }

  return (
    <div className="container-fluid App" >
    <button className="sidebar-button"><i className='fa fa-chevron-right' /></button>
      <SideBar sectionClicked={executeScroll} />
      <div>
      <Home ref={home} />
      <About ref={about} />
      <Coffe />
      <Skills ref={skills} />
      <Education ref={education} />
      <Experience ref={experience} />
      <Contact ref={contact}/>
      </div>
    </div>
  );
}

export default App;
