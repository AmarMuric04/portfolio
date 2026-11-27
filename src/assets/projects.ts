import { SmallProjectType } from "@/types";

export const projects = [
  {
    title: "ModernShop",
    type: "E-commerce",
    myThoughts: `ModernShop reflects my goal to simplify the process of launching an online store. Built as a customizable e-commerce template using Next.js and modern tooling, it enables developers or entrepreneurs to plug in their backend and database with minimal configuration. This project reinforced my focus on scalability, modular design, and ease of developer adoption.`,
    content:
      "ModernShop is a fully functional e-commerce starter template that provides a robust foundation for online stores. With key features like dynamic product listings, cart functionality, and user authentication, it’s designed to be production-ready while easily adaptable to various business needs.",
    website: "https://e-commerce-starting-template.vercel.app",
    github: "https://github.com/AmarMuric04/e-commerce-template",
    status: "Live",
    duration: "May 10th, 2025 - May 10th, 2025 (Less than a day)",
    challenges:
      "Designing the project to be generic yet extensible, handling authentication securely, and creating flexible components that work across diverse use cases.",
    keyFeatures: [
      "Modular product and cart components",
      "Authentication system with OAuth and credentials",
      "Clean and responsive UI",
      "Pre-built database models and routes",
    ],
    userFeedback:
      "Developers have praised the project for its clean architecture, ease of setup, and developer-friendly design.",
    futurePlans: [
      "Add admin dashboard with analytics",
      "Include support for payment gateways (Stripe, PayPal)",
      "Expand with review and wishlist systems",
    ],
    contributions:
      "Sole developer responsible for the entire project—frontend architecture, backend logic, authentication, and design.",
    learningOutcomes:
      "Strengthened my skills in building scalable, developer-first templates and reinforced best practices for modular design and authentication flows.",
    deployment:
      "Deployed on Vercel with flexible database integration support.",
    accessibility:
      "Designed with accessibility considerations, supporting keyboard navigation and screen readers.",
    techs: {
      frontend: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      backend: ["Next.js"],
      database: ["Postgresql", "Neon", "Drizzle"],
      other: ["JWT"],
    },
  },
  {
    title: "GoVault",
    type: "Password Manager",
    myThoughts: `GoVault represents a significant milestone in my development journey—a secure and intuitive password manager built with Next.js. This project challenged me to delve deep into encryption techniques and user-centric design, ensuring both functionality and security. The experience honed my skills in full-stack development and reinforced the importance of safeguarding user data.`,
    content:
      "GoVault is a web-based password manager that allows users to securely store and manage their credentials. Key features include customizable password generation, detailed user statistics, and a responsive interface that prioritizes user experience.",
    website: "https://govault.vercel.app",
    github: "https://github.com/AmarMuric04/govault",
    status: "Live",
    duration: "March 1st, 2025 - Present",
    challenges:
      "Implementing robust encryption and safety for password storage and ensuring seamless user interactions across various devices.",
    keyFeatures: [
      "Secure password storage",
      "Customizable password generator",
      "User statistics dashboard",
      "Responsive and intuitive UI",
    ],
    userFeedback:
      "Users have appreciated the application's clean design and the ease with which they can manage their credentials securely.",
    futurePlans: [
      "Introduce two-factor authentication",
      "Develop a mobile application version",
      "Implement password sharing capabilities",
    ],
    contributions:
      "Sole developer responsible for both frontend and backend development, as well as UI/UX design.",
    learningOutcomes:
      "Gained in-depth knowledge of encryption methods, enhanced skills in Next.js, and a deeper understanding of secure authentication practices.",
    deployment: "Deployed on Vercel with a secure backend infrastructure.",
    accessibility:
      " Designed with accessibility in mind, ensuring compatibility with screen readers and keyboard navigation.",
    techs: {
      frontend: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      backend: ["Next.js"],
      database: ["MongoDB", "Mongoose"],
      other: ["JWT", "Redux"],
    },
  },
  {
    title: "Blog",
    type: "Platform",
    myThoughts:
      "This was one of the MANY projects I made using Python, as one of my first projects in it, i chose to make something simple that I haven't made before, a Blog that I can come back to everytime I learn something new, or create something new.",
    content:
      "A modern and good looking blog website made with Flask and Jinja.",
    website: "https://blog-p1sa.onrender.com/",
    github: "https://github.com/AmarMuric04/blog",
    status: "Live",
    duration: "April 20th, 2025 - April 21st, 2025 (1 day)",
    challenges: "Working with new techonologies and libraries.",
    keyFeatures: [
      "Full authentication system",
      "Creating posts",
      "Commenting on posts",
    ],
    userFeedback: "Users appreciated how simple the website is.",
    futurePlans: ["Adding 2FA as part of the authentication process"],
    contributions: "Sole developer of the project",
    learningOutcomes:
      "Learned how to use Flask and a bunch of other libraries related to it to make production-ready websites.",
    deployment: "Deployed on onrender because the project uses sqlite",
    accessibility: "Project is made so that it's accessible to anyone",
    techs: {
      frontend: ["Bootstrap"],
      backend: ["Python", "Flask"],
      database: ["Sqlite"],
      other: [],
    },
  },
  {
    title: "DineDivine",
    type: "Platform",
    myThoughts:
      "While on a family vacation, I stumbled upon Framer Motion and was instantly captivated by its potential. This inspired me to create DineDivine—a project where my passion for culinary exploration meets innovative web design. During the development process, I challenged myself to blend smooth, captivating animations with an interactive user experience that truly engages. Every step, from implementing intricate transitions to integrating AI-powered meal recommendations, pushed me to expand my skills and embrace creative problem-solving. Reflecting on the journey, I'm proud of how DineDivine turned out. It not only represents my technical growth but also my commitment to delivering an immersive, intuitive platform that makes discovering great food both delightful and seamless.",
    content:
      "A modern culinary experience platform featuring restaurant discovery, recipe sharing, and AI-powered meal recommendations. Built as a single-page application with heavy emphasis on smooth animations and transitions using Framer Motion. Includes dynamic content loading and interactive UI elements.",
    website: "https://dinedivine-murga.web.app/",
    github: "https://github.com/AmarMuric04/DineDivine",
    status: "Live",
    duration: "Jul 7, 2024 - Jul 20, 2024 (13 days)",
    challenges:
      "Implementing smooth animations without compromising performance and integrating AI recommendations seamlessly.",
    keyFeatures: [
      "Restaurant discovery with filters",
      "Recipe sharing community",
      "AI-powered meal recommendations",
      "Smooth animations with Framer Motion",
      "Dynamic content loading",
    ],
    userFeedback:
      "Users loved the intuitive design and personalized meal recommendations.",
    futurePlans: [
      "Add user-generated content moderation",
      "Expand AI recommendations to dietary restrictions",
      "Integrate food delivery services",
    ],
    contributions:
      "Led frontend development, designed animations, and integrated AI APIs.",
    learningOutcomes:
      "Mastered Framer Motion for animations and learned about AI integration in web apps.",
    deployment:
      "Deployed on Firebase with CI/CD pipelines for automated updates.",
    accessibility:
      "Implemented keyboard navigation and ARIA labels for accessibility.",
    techs: {
      frontend: [
        "React",
        "Framer Motion",
        "Material UI",
        "Tailwind CSS",
        "JavaScript",
      ],
      backend: [],
      database: [],
      other: ["AI Integration", "Firebase"],
    },
  },
  {
    title: "Lelegram",
    type: "Messaging Clone",
    myThoughts: `Lelegram is my most ambitious and recent project—a full-featured Telegram clone that embodies everything I've learned over the past year in web development and design. After completing my MERN journey and stepping into the full-stack world, I challenged myself to build an application that not only mimics Telegram’s core functionalities but also pushes the boundaries of what I thought was possible in just three weeks.

This project features an extensive array of functionalities and I’m incredibly proud of how seamlessly it works—every feature is designed to provide an intuitive and responsive user experience. The name 'Lelegram' is a playful nod to a legendary Serbian phrase, reflecting my cultural roots and adding a unique twist to the project. Overall, Lelegram is not just a messaging app; it's a testament to my growth as a developer and a celebration of the skills I’ve honed throughout my journey.`,
    content:
      "Telegram-style messaging platform supporting real-time communication with features like group chats, message encryption, media sharing, and user presence indicators. Integrated with WebSocket for instant updates.",
    website: "https://lelegram.vercel.app",
    github: "https://github.com/AmarMuric04/Lelegram",
    status: "Live",
    duration: "Feb 4, 2025 - Feb 25, 2025 (3 weeks)",
    challenges:
      "Implementing WebSocket for real-time updates and ensuring message encryption.",
    keyFeatures: [
      "Real-time messaging",
      "Group chats",
      "Message encryption",
      "Media sharing",
      "User presence indicators",
    ],
    userFeedback:
      "Users praised the seamless real-time communication and clean UI.",
    futurePlans: [
      "Add video calling functionality",
      "Implement end-to-end encryption",
      "Expand to mobile platforms",
    ],
    contributions:
      "Developed the backend with WebSocket integration and designed the frontend.",
    learningOutcomes:
      "Learned about WebSocket communication and encryption techniques.",
    deployment: "Deployed on Vercel with MongoDB Atlas for database hosting.",
    accessibility: "Added keyboard shortcuts and screen reader support.",
    techs: {
      frontend: ["React", "Material UI", "Tailwind CSS", "JavaScript"],
      backend: ["Node.js", "Express", "Socket.IO"],
      database: ["MongoDB", "Mongoose"],
      other: ["Cloudinary", "JWT", "WebSockets", "Redux"],
    },
  },
  {
    title: "Learnify",
    type: "Learning Platform",
    myThoughts:
      "Learnify was one of those wild hackathon moments that I'll never forget. My teammates—Dzenis G, Amin N, and Hasan M—and I built this course platform in just one day. It's like Udemy, but designed specifically for elementary schools, with all the bells and whistles like video streaming, progress tracking, and even AI-powered recommendations. We actually lost the first 12 hours because of Git issues, so we really only had about 12 hours to put everything together. Despite that rocky start, we managed to pull off a feature-packed and beautifully designed project that completely blew the competition away. I even remember peeking through the school’s glass door and seeing everyone so focused on their work—it was a bit nerve-wracking, but it pushed us to deliver our best. In the end, our quick thinking and determination earned us first place at the UNINP Hackathon 2024. It was an intense day, but one that truly showed what can be achieved under pressure.",
    content:
      "Udemy-style course platform with video streaming, progress tracking, and course management. Winner of UNINP Hackathon 2024 featuring peer-to-peer learning tools and AI-powered recommendations.",
    github: "https://github.com/AmarMuric04/Hackathon-UNINP-24",
    info: "Team Project - 1st Place Winner",
    status: "Archived",
    duration: "Apr 28, 2024 - Apr 28, 2024 (1 day)",
    challenges:
      "Implementing video streaming and AI-powered recommendations within a tight deadline.",
    keyFeatures: [
      "Video streaming",
      "Progress tracking",
      "Course management",
      "Peer-to-peer learning tools",
      "AI-powered recommendations",
    ],
    userFeedback:
      "Users praised the intuitive course management and AI recommendations.",
    futurePlans: [
      "Add live classes",
      "Implement gamification",
      "Expand to mobile platforms",
    ],
    contributions:
      "Led the frontend development, integrated AI APIs, and designed the UI.",
    learningOutcomes:
      "Learned about video streaming and AI integration in educational platforms.",
    deployment: "Deployed on Vercel with MongoDB Atlas for database hosting.",
    accessibility: "Added keyboard navigation and screen reader support.",
    techs: {
      frontend: [
        "Next.js",
        "React",
        "Material UI",
        "Tailwind CSS",
        "JavaScript",
      ],
      backend: ["Node.js", "Express", "Next.js"],
      database: ["MongoDB", "Mongoose"],
      other: ["AI Recommendations", "REST API"],
    },
  },
  {
    title: "Social Media",
    type: "Social Platform",
    myThoughts:
      "Social Media was a fun experiment I started right after wrapping up my last MERN course. I built it to test my full-stack skills and explore real-time updates, and it turned out to be a great learning experience. The homepage is entirely my design, while the posts page takes inspiration from Twitter and the account page blends ideas from Twitter and LinkedIn. A quirky bit of timing was that I kicked off this project around the time TikTok was rumored to be banned in the US, which added an extra layer of excitement to the whole thing. It was also my first time using Socket.IO, and I loved how it transformed the user experience with live updates—I’m definitely planning to use it in all of my future projects.",
    content:
      "Full-stack MERN social network with real-time features including post creation/editing, liking/commenting, bookmarking, and notifications. Implements user authentication, feed filtering, and Socket.IO for live updates.",
    website: "https://social-media-demo.com",
    github: "https://github.com/AmarMuric04/NodeJs-Course/tree/main/fsp",
    status: "Live",
    duration: "Jan 8, 2025 - Jan 24, 2025 (2 weeks, 2 days)",
    challenges:
      "Implementing real-time updates with WebSocket and ensuring smooth performance.",
    keyFeatures: [
      "Post creation/editing",
      "Liking/commenting",
      "Bookmarking",
      "Notifications",
      "Real-time updates",
    ],
    userFeedback: "Users loved the real-time updates and intuitive interface.",
    futurePlans: [
      "Add video sharing",
      "Implement stories feature",
      "Expand to mobile platforms",
    ],
    contributions:
      "Developed the backend, integrated WebSocket, and designed the frontend.",
    learningOutcomes:
      "Gained expertise in real-time communication and full-stack development.",
    deployment: "Deployed on Vercel with MongoDB Atlas for database hosting.",
    accessibility: "Added keyboard navigation and ARIA labels.",
    techs: {
      frontend: ["React", "Redux", "Material UI", "JavaScript"],
      backend: ["Node.js", "Express", "Socket.IO"],
      database: ["MongoDB", "Mongoose"],
      other: ["JWT", "Cloudinary", "WebSockets"],
    },
  },
  {
    title: "SolveBox",
    type: "Educational Tool",
    myThoughts: `SolveBox is one of my latest projects and a bit of a departure from my usual app-based work. I built it as a school project using plain JavaScript, and it focuses on showing algorithms that help solve different puzzles. I designed the whole thing myself and organized the code using an MVC structure, which really helped keep everything neat despite the project's size—it's probably the biggest website I've ever put together in terms of pages and information.

What really makes SolveBox stand out is the extra touches I added along the way. For instance, I incorporated a built-in translator for Serbian, which I thought would be a neat feature to help users who prefer that language. I also experimented with interactive algorithm visualizations and step-by-step tutorials that not only look good but make understanding the underlying processes much easier. Overall, I'm really proud of how SolveBox turned out—it’s a project that blends a lot of learning with creativity, and it shows just how far I've come in my coding journey.`,
    content:
      "Interactive puzzle-solving platform featuring algorithm visualization, step-by-step tutorials, and challenge exercises. Includes various puzzle types with difficulty levels and progress tracking.",
    website: "https://solve-box.vercel.app",
    github: "https://github.com/AmarMuric04/SolveBox",
    status: "Live",
    duration: "Jan 2, 2025 - Jan 25, 2025 (3 weeks, 2 days)",
    challenges:
      "Creating interactive algorithm visualizations and ensuring smooth performance.",
    keyFeatures: [
      "Algorithm visualization",
      "Step-by-step tutorials",
      "Challenge exercises",
      "Progress tracking",
      "Multiple puzzle types",
    ],
    userFeedback:
      "Users found the tutorials and visualizations extremely helpful.",
    futurePlans: [
      "Add more puzzle types",
      "Implement multiplayer challenges",
      "Expand to mobile platforms",
    ],
    contributions:
      "Developed the frontend, designed the visualizations, and implemented the tutorials.",
    learningOutcomes:
      "Gained expertise in algorithm visualization and interactive UI design.",
    deployment: "Deployed on Vercel with Local Storage for user progress.",
    accessibility: "Added keyboard navigation and ARIA labels.",
    techs: {
      frontend: ["JavaScript", "Tailwind CSS", "HTML", "CSS"],
      backend: [],
      database: [],
      other: ["Algorithm Visualizer", "Local Storage"],
    },
  },
  {
    title: "Blajvinance",
    type: "Crypto Clone",
    myThoughts:
      "Blajvinance marked a significant milestone in my React journey. It all began after I discovered React Context, which inspired me to build a project that would test and expand my newfound skills. I set out to create a Binance-inspired cryptocurrency exchange, complete with real-time market data, dynamic charting, and interactive portfolio tracking. The project name is a playful nod to my Serbian roots, and it perfectly encapsulates my enthusiasm for both web development and crypto. Despite being developed in a short span, Blajvinance not only looks sleek and modern but also functions flawlessly, especially in handling numerical computations and currency transactions—a first for me. I’m incredibly proud of how this project turned out, as it challenged me to master new concepts and work efficiently under time constraints while delivering a robust, user-friendly experience.",
    content:
      "Binance-inspired cryptocurrency exchange interface featuring real-time market data visualization, portfolio tracking, and simulated trading. Implements complex charting functionalities and wallet management systems.",
    website: "https://blajvinance.web.app/",
    github: "https://github.com/AmarMuric04/Blajvinance",
    status: "Live",
    duration: "Apr 30, 2024 - Jul 20, 2024 (2 months, 22 days)",
    challenges:
      "Handling real-time data feeds and ensuring responsive design across devices.",
    keyFeatures: [
      "Real-time market data visualization",
      "Portfolio tracking",
      "Simulated trading",
      "Complex charting functionalities",
      "Wallet management systems",
    ],
    userFeedback:
      "Users appreciated the real-time data accuracy and intuitive interface.",
    futurePlans: [
      "Add more cryptocurrencies",
      "Implement advanced trading algorithms",
      "Enhance security features",
    ],
    contributions:
      "Developed the frontend, integrated third-party APIs, and designed the UI.",
    learningOutcomes:
      "Gained expertise in real-time data handling and responsive design.",
    deployment: "Deployed on Firebase with automated CI/CD pipelines.",
    accessibility: "Added screen reader support and keyboard navigation.",
    techs: {
      frontend: ["React", "Material UI", "Tailwind CSS", "JavaScript"],
      backend: [],
      database: [],
      other: ["API", "Firebase"],
    },
  },
  {
    title: "Shopping",
    type: "Shopping Platform",
    myThoughts:
      "Shopping was one of those early projects where I really got my hands dirty with React. I was just starting out with React Router DOM, and I decided to create something that would let me experiment with new features and design ideas. I spent a lot of time tweaking the product filtering and cart management to make them as smooth as possible, and trying out Stripe integration was a real learning curve. I even went with a bold green color scheme because it’s my favorite—and it really gives the site a unique vibe. Although I set the project aside after a couple of weeks (since I hadn’t yet learned backend stuff), working on it taught me so much about building user interfaces and handling tricky integrations. It was a fun, hands-on way to see what I could achieve with React, and it definitely helped shape my approach to future projects.",
    content:
      "Full-featured online shopping experience with product catalog, cart management, and Stripe payment integration. Features product filtering, wishlist functionality, and order history tracking.",
    website: "https://shopping-ecom-demo.vercel.app/",
    github: "https://github.com/AmarMuric04/Shopping",
    status: "Development",
    duration: "May 28, 2024 - Present",
    challenges:
      "Implementing a seamless payment flow and ensuring a responsive design.",
    keyFeatures: [
      "Product catalog with filtering",
      "Cart management",
      "Stripe payment integration",
      "Wishlist functionality",
      "Order history tracking",
    ],
    userFeedback:
      "Early users appreciated the smooth payment process and clean design.",
    futurePlans: [
      "Add user reviews and ratings",
      "Implement a recommendation engine",
      "Expand to mobile apps",
    ],
    contributions:
      "Developed the frontend, integrated Stripe, and designed the UI.",
    learningOutcomes:
      "Gained experience in payment gateway integration and state management.",
    deployment: "Deployed on Firebase with CI/CD pipelines.",
    accessibility: "Implemented ARIA labels and keyboard navigation.",
    techs: {
      frontend: ["React", "Material UI", "Tailwind CSS", "JavaScript"],
      backend: [],
      database: [],
      other: ["Stripe", "Redux", "Local Storage"],
    },
  },
  {
    title: "Newsly",
    type: "News Clone",
    myThoughts: `Newsly is honestly my first real dive into coding—a Google News clone built with nothing but vanilla JavaScript. I won't lie; looking at its code now might even give you a heart attack! Back then, I was just figuring things out, and the project ended up being a mix of excitement and chaos. I had to work around a pretty annoying API that would reset after only 20 fetches, so I ended up juggling around 15 different ones just to keep the news rolling. Even with all that hassle, Newsly still delivers the latest news with a simple, responsive design that I've always appreciated.

What makes this project so special to me is not just the functionality, but how it marks the starting point of my journey. Every line of messy code is a reminder of how far I've come. I learned so much about API integration, performance optimization (especially with that infinite scroll), and just handling the ups and downs of real-world programming. Despite its rough edges, Newsly has a charm of its own—it's a tangible snapshot of my growth as a developer, and I’m proud to see it still live and kicking.`,
    content:
      "Google News-style aggregator built with vanilla JavaScript, featuring category filtering, search functionality, and news source highlighting. Implements infinite scroll and responsive layout.",
    website: "https://newsly.web.app",
    github: "https://github.com/AmarMuric04/Newsly-App",
    status: "Live",
    duration: "Jan 14, 2024 - Mar 26, 2024 (2 months, 12 days)",
    challenges:
      "Implementing infinite scroll without performance issues and ensuring responsive design.",
    keyFeatures: [
      "Category filtering",
      "Search functionality",
      "News source highlighting",
      "Infinite scroll",
      "Responsive layout",
    ],
    userFeedback:
      "Users loved the simplicity and ease of finding relevant news.",
    futurePlans: [
      "Add personalized news feeds",
      "Implement dark mode",
      "Expand to more news sources",
    ],
    contributions:
      "Developed the entire application, integrated the News API, and designed the UI.",
    learningOutcomes:
      "Learned about API integration and performance optimization.",
    deployment: "Deployed on Firebase with Webpack for bundling.",
    accessibility: "Added keyboard navigation and screen reader support.",
    techs: {
      frontend: ["JavaScript", "HTML", "CSS"],
      backend: [],
      database: [],
      other: ["API", "Webpack", "Firebase"],
    },
  },
];

export const otherProjects: Array<SmallProjectType> = [
  {
    title: "Electron Boilerplate",
    github:
      "https://github.com/AmarMuric04/electron-react-bootstrap-zustand-express-boilerplate",
    description:
      "An Electron Boilerplate with a complete introduction process already done.",
  },
  {
    title: "Next.js Auth Boilerplate",
    github: "https://github.com/AmarMuric04/auth-boilerplate",
    description: "A full auth system with NextAuth, JWTs and Cookies.",
  },
  {
    title: "Python snake",
    github: "https://github.com/AmarMuric04/Py/tree/main/Day_20/snake_game",
    description: "A classic Snake game implemented in Python.",
  },
  {
    title: "Blackjack",
    github: "https://github.com/AmarMuric04/Blackjack",
    description: "A simple Blackjack card game built with Python.",
  },
  {
    title: "Foodies",
    github: "https://github.com/AmarMuric04/Foodies",
    description: "A food recipe app for discovering and sharing recipes.",
  },
  {
    title: "Tic-Tac-Toe Vanilla Javascript",
    github: "https://github.com/AmarMuric04/JS-Vanilla-Tic-Tac-Toe",
    description: "A Tic-Tac-Toe game built using plain JavaScript.",
  },
  {
    title: "Tic-Tac-Toe React",
    github: "https://github.com/AmarMuric04/Tic-Tac-Toe",
    description: "A Tic-Tac-Toe game implemented using React.",
  },
  {
    title: "Chuck Norris App",
    github: "https://github.com/AmarMuric04/Chuck-Norris-App",
    description: "A fun app that generates random Chuck Norris jokes.",
  },
  {
    title: "Weather App",
    github: "https://github.com/AmarMuric04/Weather-App",
    description:
      "A weather app that fetches and displays current weather data.",
  },
  {
    title: "Forkify",
    github: "https://github.com/AmarMuric04/Forkify",
    description:
      "A recipe search app built with JavaScript and modern web technologies.",
  },
  {
    title: "Mapty",
    github: "https://github.com/AmarMuric04/Mapty",
    description:
      "A workout tracking app that uses geolocation to map exercises.",
  },
  {
    title: "Bankist",
    github: "https://github.com/AmarMuric04/Bankist",
    description: "A minimalist banking app simulation built with JavaScript.",
  },
  {
    title: "Memory Game",
    github: "https://github.com/AmarMuric04/Memory-game",
    description:
      "A simple memory card matching game to test your recall skills.",
  },
  {
    title: "Pig Game",
    github: "https://github.com/AmarMuric04/Pig-Game-Modified",
    description: "A dice game where players race to reach a target score.",
  },
  {
    title: "Clock",
    github: "https://github.com/AmarMuric04/Clock",
    description: "A digital clock application built with JavaScript.",
  },
  {
    title: "Rock Paper Scissors",
    github: "https://github.com/AmarMuric04/Rock-Paper-Scissors",
    description: "A Rock Paper Scissors game implemented in JavaScript.",
  },
  {
    title: "Amazon Clone",
    github: "https://github.com/AmarMuric04/Amazon-Clone",
    description:
      "A clone of the Amazon's e-commerce built for learning purposes.",
  },
];
