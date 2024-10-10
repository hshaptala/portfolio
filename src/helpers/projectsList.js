import pixelwar from "./../img/projects/pixelwar.png";
import pixelwarBig from "./../img/projects/pixelwar-big.png";

import stathydre from "./../img/projects/stathydre.png";
import stathydreBig from "./../img/projects/stathydre-big.png";

const projects = [

  {
    title: "Web app with RESTful API",
    description: "Pixel battle game",
    fullDescription:
      "During this project, I created a web application that allows students to create pixel art on a grid, with real-time updates and a team selection feature.",
    img: pixelwar,
    imgBig: pixelwarBig,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/hshaptala/Pixel-War-IUT",
  },

  {
    title: "Weather data tracking app",
    description: "GUI application for tracking weather data",
    fullDescription:
      "As part of a team, my task during this project was to create an interface for an application that allows users to view weather statistics for different countries.",
    img: stathydre,
    imgBig: stathydreBig,
    skills: ["C#"],
    link: "https://github.com/hshaptala/StatHydre",
  }

];

export { projects };
