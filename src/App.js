import './App.css';
import NavBar from './components/navbar/NavBar.js';
import Leader from './components/leader/Leader';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <NavBar />
    <Leader />
    <Projects />
    <About />
    <Contact />
    </>
  );
}

export default App;
