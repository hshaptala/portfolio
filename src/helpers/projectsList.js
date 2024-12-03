import pixelwar from "./../img/projects/pixelwar.png";
import pixelwarBig from "./../img/projects/pixelwar-big.png";

import stathydre from "./../img/projects/stathydre.png";
import stathydreBig from "./../img/projects/stathydre-big.png";

import graph from "./../img/projects/graph.png";
import graphBig from "./../img/projects/graph-big.png";

import zaloupa from "./../img/projects/zaloupa.png";
import zaloupaBig from "./../img/projects/zaloupa-big.png";

import towa from "./../img/projects/towa.png";
import towaBig from "./../img/projects/towa-big.png";

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
    skills: ["C#", "Visual Studio", "MySQL"],
    link: "https://github.com/hshaptala/StatHydre",
  },

  {
    title: "Towa",
    description: "Board game with AI implementation",
    fullDescription:
      "Towa is a strategic chessboard game for 2 players. The goal is to score the most points by moving pawns. During this project, i have coded the rules as well as an AI for this game.",
    img: towa,
    imgBig: towaBig,
    skills: ["Java", "JUnit 5"],
    link: "https://github.com/hshaptala/Towa",
  },

  {
    title: "Graph Visualization",
    description: "Application to visualize graphs by bundling edges",
    fullDescription:
      "In this project I used a Java library for modeling graphs. It was necessary to program breadth-first and depth-first traversal algorithms to find the shortest path between two nodes.",
    img: graph,
    imgBig: graphBig,
    skills: ["Java", "JUnit 5"],
    link: "https://github.com/hshaptala/Graph-Visualization",
  },

  {
    title: "Document signing website",
    description: "Design for a website that signs documents online",
    fullDescription:
      "This project is a website for a company that offers online document signing. The goal was to create a design from a scratch using flexbox.",
    img: zaloupa,
    imgBig: zaloupaBig,
    skills: ["HTML", "CSS", "Figma"],
    link: "https://github.com/hshaptala/Document-Signing",
  },
];

export { projects };
