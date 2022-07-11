import './App.css';
import Router from './router'

import Landing from './containers/Landing';
import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <Router>
    
    <Landing>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>

    </Landing>
    
    </Router>
  

    
    
  );
}

export default App;
