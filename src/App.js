import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Particles from "react-tsparticles"
import Aos from "aos"
import Project from "./pages/project"

const App = () => {
    Aos.init({
        duration: 1000
    })

    const particlesInit = (main) => {
      console.log(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    }

    window.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() { Aos.refresh(); }, 100);
    });

    return (
        <>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparant",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 10,
              opacity: 0.8,
              size: 100,
            },
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#69F2DD",
          },
          zIndex: -1,
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: .5,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/musicmatch' element={<Project />} />
            <Route path='/technoleon' element={<Project />} />
            <Route path='/zwerfinator' element={<Project />} />
        </Routes>
        </>
    )
}

export default App