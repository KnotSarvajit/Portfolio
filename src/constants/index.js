import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "User Interface Developer",
      icon: mobile,
    },
    {
      title: "3-D Modeller",
      icon: backend,
    },
    {
      title: "Content Explorer and Network Rooter",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Personal Project",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with newer ideas to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "User Interface Developer",
      company_name: "College J components",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Developing 3-D models and User Interfaces.",
        "Worked of Geoearth and Blender to create a 3-D racetrack and other models.",
        "Created a car rental app design in Figma.",
        "Also helped develop assets and created unique web-app designs that were implemented.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Microsoft Innovations Club",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2023 - Present",
      points: [
        "Developing web applications using Flask and other related technologies.",
        "Working with club members to create products are as service to college",
        "Implementing responsive design and experience working with HTML and CSS",
        "Working closely in club projects and activities",
      ],
    },
    {
      title: "Network Enthusiast",
      company_name: "Personal Interests",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Network Exploration: Understand the dynamics of social networks and content propagation.",
        "Viral Content Insight: Analyze factors driving content virality and engagement on social platforms.",
        "Digital Influence Mastery: Harness social networks for branding, audience engagement, and effective digital marketing."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as this, but Sarvajit here has proved me wrong.",
      name: "Dhiya",
      designation: "Bio-Researcher",
      company: "Sap Labs",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      testimonial:
        "I've to say this is just the begining of things it was good to see him work this good was amazed to see it.",
      name: "Aaryan",
      designation: "SWE",
      company: "Accenture",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      testimonial:
        "After Sarvajit worked closely with our website, our website has gained the need can't thank him enough!",
      name: "Leya",
      designation: "HR",
      company: "BuildItYourself co",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rental",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
      
      ],
      image: carrent,
      source_code_link: "https://github.com/KnotSarvajit",
    },
    {
      name: "Certificate Generator",
      description:
        "Customized certificates for achievements, courses, and events using our Generator. Personalize templates and generate elegant designs with ease.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://certificategeneratormic2.onrender.com/",
    },
    {
      name: "Portfolio",
      description:
        "portfolio website elegantly displays my creative journey, inviting visitors to explore my work, skills, and achievements while reflecting my unique identity and passion.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/KnotSarvajit",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };