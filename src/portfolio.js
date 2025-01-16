/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faizuddin Mohammed",
  title: "Hi all, I'm Faizuddin",
  subTitle: "Here is a little piece about myself",
  introductionParagraphs: [
    emoji("👩🏻‍💻 Passionate Full Stack Software Developer"),
    emoji("🚀 Looking for Internships and Full Stack Developer roles in tech"),
    emoji("👩🏻‍🎓 Graduated from State University of New York"),
    emoji("🧘🏻‍♀️ Love gym and cooking"),
    emoji("🏃🏻‍♀️ Enjoys hiking and staying positive"),
    emoji(" ✍🏻 Love writing and sharing ideas")
  ],
  resumeLink:
    "https://drive.google.com/file/d/1bs2rvEVlaPHIRdeUrIu4fF1tK5u7iZE9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Itachi4",
  linkedin: "https://www.linkedin.com/in/faizuddinmohammed44/",
  gmail: "faizuddin3366@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize the icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to falsee
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Develop highly interactive front-end interfaces powered by robust back-end integration for web applications that shine. "
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as MongoDB/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-typescript"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "State University of New York",
      logo: require("./assets/images/suny.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2023",
      desc: "GPA 4.0/4.0",
      desc: "Relevant Coursework: Operating Systems, DBMS, Algorithms, ML, Web Technologies, Data Science, Data Analytic"
    },
    {
      schoolName: " Jawaharlal Nehru Technological University",
      logo: require("./assets/images/jntuh.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2017 - June 2021",
      desc: "Relevant Coursework:  Java, C, Python, Object-Oriented Design, Data strucutres, Algorithms, Discrete Math"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: " Research Assistant",
      company: "UB",
      companylogo: require("./assets/images/suny.png"),
      date: "October 2023 – January 2025",
      descBullets: [
        "Conducted exploratory data analysis (EDA) on large datasets using Python, Pandas, Matplotlib, and NumPy to uncover insights and inform model selection strategies. Developed and enhanced predictive models employing scikit-learn and TensorFlow for classification and regression problems, achieving significant accuracy improvements. Implemented Natural Language Processing (NLP) techniques with NLTK for sentiment analysis, enhancing product recommendation systems and integrating deep learning methodologies for robust analytics."
      ]
    },

    {
      role: "Senior Full Stack Developer",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.png"),
      date: "May 2019 – August 2022",
      descBullets: [
        "Spearheaded the development of RESTful APIs and integrated Microservices using Java and Spring Boot, boosting system efficiency. Enhanced UI responsiveness by building interactive SPAs with Angular, RxJS, NgRx, and Angular Material. Streamlined workflows with AWS Lambda, reducing latency by 20%, and implemented efficient CI/CD pipelines using Jenkins. Ensured robust security by collaborating on scans, data masking, and encryption. Optimized Oracle 9i database interactions, significantly improving data access and performance. "
      ]
    },

    {
      role: "Software Developer",
      company: "Cleartrip",
      companylogo: require("./assets/images/infosys.png"),
      date: "January 2017 – July 2017",
      descBullets: [
        "Boosted system efficiency and user satisfaction by integrating Java and Spring Boot for backend and Angular for front-end development, leading the design and implementation of scalable software architectures",
        "Succeeded in implementing data handling and conducting data analysis with various databases, optimizing query performance by 40% and enhancing overall system efficiency, leading to a cost savings."
      ]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some personal projects I've been working on",
  projects: [
    {
      image: require("./assets/images/javagarbage.webp"),
      projectName: " Java Garbage Collector",
      projectDesc:
        "The G1-style garbage collector exhibits deep expertise in JVM internals and memory management, featuring custom concurrent mark-sweep algorithms that reduce pause times and enhance application performance; it includes advanced thread synchronization, uses volatile variables for improved concurrency control, and incorporates robust exception handling with optimized memory allocation strategies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Itachi4/G1GC-Master"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blockchain.webp"),
      projectName: "AdSpace Marketplace DApp",
      projectDesc:
        "Developed a decentralized marketplace leveraging Ethereum blockchain technology, integrated with MetaMask for secure cryptocurrency transactions and Web3.js for interacting directly with smart contracts. Deployed the application in a cloud environment, utilizing containers for microservice orchestration. Streamlined ad space management through a sophisticated React interface, hosted on Heroku with dynamic scaling and automated deployment pipelines for continuous integration and delivery. Incorporated robust security features such as SSL/TLS encryption and OAuth for user authentication to ensure data integrity and privacy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Itachi4/blockchain"
        }
      ]
    },
    {
      image: require("./assets/images/carrental.webp"),
      projectName: "Car Rental Management System",
      projectDesc:
        "Implemented a robust Java-based backend with PostgreSQL integration for efficient data management and scalability. Developed the front-end using React.js, leveraging its component-based architecture to ensure a responsive and user-friendly interface. Hosted the application on the Azure cloud, utilizing Azure App Service for seamless deployment and Azure SQL Database for high availability and secure data storage. Enhanced the system's security with Azure Active Directory for identity management and incorporated automated CI/CD pipelines using Azure DevOps for streamlined updates and maintenance."
    },
    {
      image: require("./assets/images/movierec.webp"),
      projectName: "Movie Recommendation System",
      projectDesc:
        " Developed the frontend using Angular, creating a dynamic and responsive user interface. For the backend, implemented a real-time movie recommendation engine with MongoDB for scalable data storage, and Express.js integrated with machine learning algorithms, using TensorFlow to enhance personalization based on user behavior. Created efficient RESTful APIs with Node.js and Express for robust request handling, including JWT authentication for secure user sessions. The complete system was deployed on Google Cloud Platform (GCP), utilizing Compute Engine for scalable server management, Cloud Storage for efficient data accessibility, and App Engine for automatic scaling capabilities."
    },
    {
      image: require("./assets/images/crime.webp"),
      projectName: "Real-Time Crime Forecasting",
      projectDesc:
        "Spearheaded the development of, leveraging including Pandas, NumPy, and Scikit-learn to predict and trends. Employed clustering algorithms like K-Means and DBSCAN, and classification models such as Random Forest and SVM to enhance predictive accuracy. Additionally, engineered from socio-economic and geographic data, implemented an interactive using Folium, and deployed the solution on GCP. This involved rigorous evaluation, significantly improving predictive accuracy and operational response times.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Itachi4/crimePrediction"
        }
      ]
    },
    {
      image: require("./assets/images/takeout.webp"),
      projectName: "Takeout Management System",
      projectDesc:
        "Developed a Takeout Management System featuring a robust backend built with Spring Boot, supporting effective management of dishes, orders, and employee details, and secured with Spring Security and Spring Data JPA for MySQL integration. The Angular frontend, enhanced with Node.js, offers an intuitive interface for customers to explore menus and place orders in real-time. The system leverages MySQL and Mybatis Plus for a scalable database structure and Redis for caching, improving application responsiveness and reducing load times.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Itachi4/Takeout_web"
        }
      ]
    },
    {
      image: require("./assets/images/trails.webp"),
      projectName: "Trails Web Application",
      projectDesc:
        "Built a full-stack Trails Web Application that enables users to search, add, and rate hiking trail locations. The front end was designed using HTML, CSS, and JavaScript to craft a dynamic user interface. Backend functionality was achieved through RESTful APIs developed with Node.js and Express, handling HTTP requests and efficiently managing data using MongoDB as the primary database. User authentication was secured with Passport.js, enhancing the user experience. The application features integrated Cloudinary for storing and managing images associated with user reviews and uses MapBox APIs to create an interactive cluster map, leveraging geocoding data to dynamically display locations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Itachi4/Adventure"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "17 Degree of Freedom Autonomous Robot",
      subtitle: "Won Undergraduate technical fest with 17 DOF autonomous robot",
      image: require("./assets/images/robot.webp"),
      imageAlt: "Awesome Robot here!",
      footerLink: []
    },
    {
      title: "Infosys Certified Angular Professional",
      subtitle: "Certified in  Angular, RxJS, Angular CLI, Angular Material",
      image: require("./assets/images/angular.png"),
      imageAlt: "Angular Certification",
      footerLink: []
    },
    {
      title: "Infosys Certified Java Professional",
      subtitle:
        "Certified in  OOPS, Operators, Spring MVC, Hibernate, JDBC, JPA, Autowiring",
      image: require("./assets/images/java.png"),
      imageAlt: "Java Certification",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss job opportunities or just say hi? ",
  email_address: "faizuddin3366@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
