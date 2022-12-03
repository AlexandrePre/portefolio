import Bordquizz from "../assets/img/bordeauxquizz.jpg";
// import red from "../assets/img/red.png";
import black from "../assets/img/black.png";
// import yellow from "../assets/img/yellow.png";
import blue from "../assets/img/blue.png";
import white from "../assets/img/white.png";
import alexandre from "../assets/img/alexandrePre.jpg";
import derniereheure from "../assets/img/logo_global.png";
import wwh from "../assets/img/LOGO.png";
import make from "../assets/img/makesense.png";
import Videowwh from "../assets/video/wwhsite.mp4";
import videoPhoto from "../assets/video/photo.mp4";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import msql from "../assets/img/msql.png";
import node from "../assets/img/node.png";
import react from "../assets/img/react.png";
import sql from "../assets/img/sql.png";
import js from "../assets/img/js.png";
import cv from "../assets/video/cv.mp4";
import CV from "../assets/img/CV.jpg";
import bordeauxquizz from "../assets/video/bordeauquizz.mp4";
import scrum from "../assets/img/scrum.png";
import github from "../assets/img/github.png";
import git from "../assets/img/git.png";
import derniere from "../assets/video/derniere.mp4";
import makese from "../assets/video/make.mp4";
import hackathon from "../assets/img/hackathon.png";
import loading from "../assets/video/loading.mp4";
import comming from "../assets/img/comming.jpg";
import transparant from "../assets/img/vide.png";

const data = [
  {
    id: 1,
    cardName: "P",
    newsNameBlack: "",
    titre: "PRE ALEXANDRE",
    description:
      "Téléphone : 0782388918, Mail : pre.alexandre1@gmail.com, développeur fullstack React/NodeJS",
    img: alexandre,
    imgFace: black,
    video: videoPhoto,
    logo1: html,
    logo2: css,
    logo3: react,
    logo4: js,
    logo5: node,
    logo6: sql,
    logo7: msql,
    lienSite: "/",
    lienGit: "https://github.com/AlexandrePre",
  },
  {
    id: 2,
    cardName: "O",
    newsNameBlack: "",
    titre: "MA VIE PROFESSIONNEL D'AVANT",
    img: Bordquizz,
    imgFace: black,
    video: Videowwh,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 3,
    cardName: "R",
    newsNameBlack: "",
    titre: "MON CV",
    // txt: "Bordeauquizz",
    img: CV,
    imgFace: black,
    video: cv,
    logo1: html,
    logo2: css,
    logo3: react,
    logo4: js,
    logo5: node,
    logo6: sql,
    logo7: msql,
    lienSite:
      "https://drive.google.com/file/d/139Jmwmohr45KjLRqjqyn8i7Jiwk7H0I-/view?usp=share_link",
    lienGit: "https://github.com/AlexandrePre",
  },
  {
    id: 4,
    cardName: "T",
    newsNameBlack: "",
    titre: "BORDEUXQUIZ",
    description:
      "Objectif : réaliser un site responsive en HTML/CSS en intégrant des modules JS",
    txt: "Projet 1 de la wild code school (2semaines)",
    img: Bordquizz,
    imgFace: black,
    logo1: html,
    logo2: css,
    logo3: js,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    video: bordeauxquizz,
    lienSite: "https://alexandrepre.github.io/bordeuxquizz/",
    lienGit: "https://github.com/AlexandrePre/bordeuxquizz",
  },
  {
    id: 5,
    cardName: "E",
    newsNameBlack: "",
    titre: "WORL WAR HERO",
    description:
      "Objectif : créer un jeu de carte en React tout en fesant appel à une API, travail en équipe de 5 avec la technique SCRUM et en utilisant un workflow Github",
    txt: "Projet 2 de la wild code school (6 semaines)",
    logo1: html,
    logo2: css,
    logo3: react,
    logo4: git,
    logo5: github,
    logo6: scrum,
    logo7: transparant,
    img: wwh,
    imgFace: black,
    video: Videowwh,
    lienSite: "https://projet2-woad.vercel.app",
    lienGit: "https://github.com/AlexandrePre/projet2",
  },
  {
    id: 6,
    cardName: "F",
    newsNameBlack: "",
    titre: "Dernière heure",
    txt: "Hackathon de 24h, résultat 1ère place du campus",
    img: derniereheure,
    imgFace: black,
    video: derniere,
    logo1: html,
    logo2: css,
    logo3: react,
    logo4: git,
    logo5: github,
    logo6: transparant,
    logo7: transparant,
    description:
      "Créer un site sur le thème du voyage.Notre histoire nous sommes en 2132, la planète terre va mourrir dans 1h et on est l'agence de voyage dernère heure qui propose des billets pour de nouvelle planètes, mais attention plus le temps avance et plus les prix monte et les places restantes diminues",
    lienSite: "https://hackaton-ovvrm01ko-alexandrepre.vercel.app/",
    lienGit: "https://github.com/AlexandrePre/derniereheure",
  },
  {
    id: 7,
    cardName: "O",
    newsNameBlack: "",
    titre: "make sense",
    txt: "Projet 3 de la Wild code Scholl (en 8 semaines) En Cours",
    description:
      "Création d'une plateforme de prise de décision colaborative interne en entreprise. interaction dynamique et en temps réel entre les utilisateurs de la plateforme (notification lors d'une crétion d'une décision, d'un avis, ...)",
    img: make,
    imgFace: black,
    video: makese,
    logo1: react,
    logo2: node,
    logo3: css,
    logo4: scrum,
    logo5: github,
    logo6: sql,
    logo7: msql,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 8,
    cardName: "L",
    newsNameBlack: "",
    titre: "Hackathon 2",
    txt: "48h du 11 au 13 janvier 2023",
    img: hackathon,
    imgFace: black,
    video: loading,
    logo1: react,
    logo2: node,
    logo3: css,
    logo4: git,
    logo5: github,
    logo6: sql,
    logo7: msql,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 9,
    cardName: "I",
    newsNameBlack: "",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: comming,
    imgFace: black,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 10,
    cardName: "O",
    newsNameBlack: "",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: comming,
    imgFace: black,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 11,
    cardNameBlack: "A",
    newsNameBlack: "R",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 12,
    cardNameBlack: "L",
    newsNameBlack: "E",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 13,
    cardNameBlack: "E",
    newsNameBlack: "A",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 14,
    cardNameBlack: "X",
    newsNameBlack: "C",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 15,
    cardNameBlack: "A",
    newsNameBlack: "T",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 16,
    cardNameBlack: "N",
    newsNameBlack: "/",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 17,
    cardNameBlack: "D",
    newsNameBlack: "N",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 18,
    cardNameBlack: "R",
    newsNameBlack: "O",
    // txt: "Première Place",
    titre: "COMMING SOON",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 19,
    cardNameBlack: "E",
    newsNameBlack: "D",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 20,
    cardNameBlack: "-",
    newsNameBlack: "E",
    titre: "COMMING SOON",
    // txt: "Première Place",
    img: blue,
    imgFace: white,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 21,
    cardName: "P",
    titre: "COMMING SOON",
    newsNameBlack: "J",
    // txt: "Première Place",
    img: blue,
    imgFace: black,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 22,
    cardName: "R",
    titre: "COMMING SOON",
    newsNameBlack: "S",
    // txt: "Première Place",
    img: blue,
    imgFace: black,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
  {
    id: 23,
    cardName: "E",
    titre: "COMMING SOON",
    newsNameBlack: "GIT",
    // txt: "Première Place",
    img: blue,
    imgFace: black,
    video: loading,
    logo1: transparant,
    logo2: transparant,
    logo3: transparant,
    logo4: transparant,
    logo5: transparant,
    logo6: transparant,
    logo7: transparant,
    lienSite: "/",
    lienGit: "/",
  },
];

export default data;