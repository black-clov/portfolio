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
  csharp,
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
    title: "Unity3D developer",
    icon: web,
  },
  {
    title: "3D Artist - Blender",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C# developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Unity3D",
    icon: meta,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "C#",
    icon: csharp,
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
    title: "Unity3D Gamification App",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Developed a 3D educational game that combines gamification elements with learning objectives.",
      "Created interactive environments to teach topics such as the human body and nature through engaging gameplay.",
      "Integrated educational content seamlessly into game mechanics for an immersive and fun learning experience.",
      "Ensured performance optimization for smooth gameplay on multiple platforms."
    ],
  },
  {
    title: "3D Animation Character for Movie",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Designed and animated 3D characters for a cinematic movie project.",
      "Implemented realistic character movements and expressions using advanced rigging and animation techniques.",
      "Collaborated closely with directors and designers to align animations with the storytelling vision.",
      "Optimized character assets for high-quality rendering while maintaining performance."
    ],
  },
  {
    title: "Mixed Reality Training App",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Developed a mixed reality application for robot training by integrating real-life environments with virtual objects.",
      "Simulated realistic robotic operations in a hybrid virtual-physical environment for better training efficiency.",
      "Implemented precise interaction mechanics to ensure seamless integration between real-world and virtual elements.",
      "Optimized the app for use with Meta Quest 3 and other MR devices."
    ],
  },
  {
    title: "Virtual Reality Pilot Training App",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Created a virtual reality application for pilot training in the aeronautics industry.",
      "Simulated cockpit environments and flight scenarios for realistic training sessions.",
      "Designed immersive user interactions to replicate real-life aeronautical challenges.",
      "Ensured high performance at 72 FPS for VR devices like Meta Quest 3 to avoid motion sickness."
    ],
  },
  {
    title: "Augmented Reality Medical Monitoring App",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Developed an AR application for 3D room monitoring, tailored for doctors and medical professionals.",
      "Integrated IoT devices and sensors to provide real-time updates and 3D visualization of patient conditions.",
      "Created an intuitive interface for users to interact with 3D models and monitor multiple rooms simultaneously.",
      "Optimized the app for seamless AR experience across devices and ensured data accuracy from IoT inputs."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
