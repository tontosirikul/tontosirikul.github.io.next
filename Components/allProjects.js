import Ventilator from "../public/img/ventilator.png";
import eggclassification from "../public/img/Egg-Classification.png";
import mobilerobot from "../public/img/mobilerobot.png";
import snakegame from "../public/img/snakegame.png";
import Nav_Viz from "../public/img/Nav_Viz.jpg";
import SmartInventory from "../public/img/SmartInventory.png";
import ddcwebapp from "../public/img/ddcwebapp.png";
import regressionmodel from "../public/img/regressionmodel.png";
import smartmotor from "../public/img/smartmotor.jpeg";
import plc from "../public/img/plc.png";
import imageprocessing from "../public/img/imageprocessing.png";
const projects = [
  // {
  //   category: ["Javascript", "Front-end", "REACT.JS", "Dashboard"],
  //   link1: "",
  //   link2: "",
  //   link3: "",
  //   icon1: "G",
  //   icon2: "Y",
  //   image: ddcwebapp,
  //   title: "DDC Vaccine Inventory Management",
  //   detail:
  //     "Vaccine Inventory Management for Deparment of Diesease Control, which performs CRUD operation and also illustrates the Thailand map with coverage percentage of each vaccine in each province",
  // },
  {
    category: ["Javascript", "Front-end", "ROS", "React", "Robotics"],
    link1: "",
    link2: "https://github.com/tontosirikul/ROS_Naviz",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: Nav_Viz,
    title: "ROS Naviz",
    detail:
      "Naviz is our implementation of ROS web-based visualization with full functionality from RVIZ with additional Virtual Wall server",
  },
  {
    category: ["Python", "AI/ML/DL", "MQTT", "Dashboard", "IOT"],
    link1: "",
    link2: "",
    link3:
      "https://docs.google.com/presentation/d/1CZ1D9SWsslrawWbW2CGqd7OPGGRcHvRJ8KLcBOLMaBs/edit?usp=sharing",
    icon1: "G",
    icon2: "Y",
    image: smartmotor,
    title: "Smart Motor Anomaly detection with Grafana IOT dashboard",
    detail:
      "The system performs dashboard to monitor various data from sensors that are attached to the machine, which this system wss intregrated with machine learning algorithm at backend to notify site engineers when anomaly data appears",
  },
  {
    category: ["Python", "AI/ML/DL", "Flask"],
    link1: "",
    link2: "",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: regressionmodel,
    title: "Regression Model on Machine Setting Parameter",
    detail:
      "This project is implementation of how to use machine learning to apply with properties of soil water to become ideal machine configuration.",
  },
  {
    category: ["Python", "Javascript", "Front-end", "Back-end", "Django"],
    link1: "",
    link2: "https://github.com/tontosirikul/Inventory-Management-System",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: SmartInventory,
    title: "Inventory Management System",
    detail:
      "Inventory Management System will replaced all of the paper work for admin and staffs in RAI Lab , and also reduce the time for dealing about borrowing Items in RAI Lab",
  },
  {
    category: [
      "React",
      "Express",
      "Front-end",
      "Back-end",
      "Typescript",
      "Jasmine",
    ],
    link1: "",
    link2: "https://github.com/tontosirikul/ImageProcessing-APP",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: imageprocessing,
    title: "Image Processing APP",
    detail:
      "This project aims to be implementation of express as server, which can resize the image from client",
  },
  {
    category: ["Javascript", "Front-end", "Next.js"],
    link1: "",
    link2: "",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: ddcwebapp,
    title: "Portfolio website",
    detail:
      "Vaccine Inventory Management for Deparment of Diesease Control, which performs CRUD operation and also illustrates the Thailand map with coverage percentage of each vaccine in each province",
  },
  {
    category: ["C++", "OOP"],
    link1: "",
    link2: "https://github.com/tontosirikul/Udacity-CppND",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: snakegame,
    title: "C++ Udacity Projects",
    detail:
      "Implemented the knowledge from C++ nanodegree, from implement A* star to create the snake game",
  },
  {
    category: ["Javascript", "Front-end", "ROS", "Robotics"],
    link1: "https://youtu.be/6Rm00ucj0-4",
    link2: "https://github.com/Kasidit0052/MobileRobot_ROS",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: mobilerobot,
    title: "Mobile Robot Admin Webapp",
    detail:
      "Every robots need interface to control, does it better to use webapp instead of use the command line.",
  },
  {
    category: ["Python", "OpenCV"],
    link1: "https://www.youtube.com/watch?v=anRibpEwmmg",
    link2: "https://github.com/tontosirikul/Ventilator-Counting-OpenCV",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: Ventilator,
    title: "Ventilator Counting OpenCV",
    detail:
      "Implemented the knowledge from Computer Vision module by create Ventilator Counting project",
  },

  {
    category: ["Python", "Pytorch", "AI/ML/DL", "fast.ai"],
    link1: "https://www.youtube.com/watch?v=6xNEK4WI_I8",
    link2:
      "https://github.com/tontosirikul/Fried-egg-and-Omelette-Images-Classification",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: eggclassification,
    title: "Fried egg and Omelette Images Classification",
    detail:
      "Fast.ai is an intuitive approach to deep learning, which allow me the construct CNN within 4 lines of code.",
  },
  {
    category: ["Automation", "PLC"],
    link1: "https://www.youtube.com/watch?v=kAZtVZm91ww",
    link2: "",
    link3: "",
    icon1: "G",
    icon2: "Y",
    image: plc,
    title: "Object classification with Mitsubishi PLC",
    detail:
      "This project aims to be implementation of PLC Laddar logic programming in Industrial Automation module",
  },
];

export default projects;
