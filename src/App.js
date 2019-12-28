import React from 'react';
import SideBar from './components/SideBar'
import Home from './components/Home'
import './App.scss';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App(props) {
  const home = React.createRef();
  const about = React.createRef();
  const skills = React.createRef();
  const experience = React.createRef()


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
        Experience.current.scrollIntoView({behavior: 'smooth'})
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
      <Skills ref={skills} />
      <Experience ref={experience} />
      </div>
    </div>
  );
}

export default App;
