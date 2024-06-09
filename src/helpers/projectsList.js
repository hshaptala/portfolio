import towa from "./../img/projects/towa.png";
import towaBig from "./../img/projects/towa-big.png";

import pixelwar from "./../img/projects/pixelwar.png";
import pixelwarBig from "./../img/projects/pixelwar-big.png";

import odomo from "./../img/projects/odomo.png";
import odomoBig from "./../img/projects/odomo-big.png";

import graph from "./../img/projects/graph.png";
import graphBig from "./../img/projects/graph-big.png";

import zaloupa from "./../img/projects/zaloupa.png";
import zaloupaBig from "./../img/projects/zaloupa-big.png";

const projects = [
  {
    title: "Towa",
    description: "Board game with AI implementation",
    fullDescription:
      "Towa is a strategic chessboard game for 2 players. The goal is to score the most points by moving pawns. During this project, i have coded the rules as well as an AI for this game.",
    img: towa,
    imgBig: towaBig,
    skills: ["Java"],
    link: "https://github.com/hshaptala/Towa",
  },

  {
    title: "Odomo",
    description: "Console weather station",
    fullDescription:
      "Odomo is a fictitious weather station application in console. I was invited to adapt, correct, and complete the existing code. This project challenged my logic and allowed me to understand the importance of writing conventions so that the code is accessible to others (JUnit tests, Javadoc).",
    img: odomo,
    imgBig: odomoBig,
    skills: ["Java"],
    link: "https://github.com/hshaptala/Odomo",
  },

  {
    title: "Pixel War IUT",
    description: "Web pixel battle game",
    fullDescription:
      "Pixel IUT War is an interactive web application designed for students to engage in a collaborative and competitive pixel art experience. The goal was to create a dynamic platform where users can modify a shared pixel grid in real-time.",
    img: pixelwar,
    imgBig: pixelwarBig,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/hshaptala/Pixel-War-IUT",
  },

  {
    title: "Graph Visualization",
    description: "Application to visualize graphs by bundling edges",
    fullDescription:
      "In this project I used a Java library for modeling graphs. It was necessary to program breadth-first and depth-first traversal algorithms to find the shortest path between two nodes.",
    img: graph,
    imgBig: graphBig,
    skills: ["Java"],
    link: "https://github.com/hshaptala/Graph-Visualization",
  },

  {
    title: "Zaloupa",
    description: "Design for a website that signs documents online",
    fullDescription:
      "This project is a website for a company that offers online document signing. The goal was to create a design from a scratch using flexbox.",
    img: zaloupa,
    imgBig: zaloupaBig,
    skills: ["HTML", "CSS"],
    link: "https://github.com/hshaptala/Document-Signing",
  },
];

export { projects };
