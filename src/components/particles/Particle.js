import React from "react";
import Particles from "react-particles-js";
function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 110,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: "#29F3C3",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              opacity: 0.9,
              width: 1,
              shadow: {
                enable: true,
                color: "#29F3C3",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 5,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Particle;
