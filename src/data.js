export const profile = {
  name: 'Neeraj Rana',
  first: 'Neeraj',
  last: 'Rana',
  role: 'MERN Stack Developer',
  email: 'rananeeraj596@gmail.com',
  phone: '+91 99717 67337',
  phoneHref: '+919971767337',
  linkedin: 'https://www.linkedin.com/in/neeraj-rana-0b6a50318/',
  linkedinLabel: 'neeraj-rana-0b6a50318',
  github: 'https://github.com/', // TODO: replace with your GitHub profile URL
  location: 'Delhi, India',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '5+', label: 'Projects built', color: 'cyan' },
  { value: 'MERN', label: 'Core stack', color: 'orange' },
  { value: '2025', label: 'BCA started', color: 'green' },
];

export const about = [
  'Full Stack Developer (MERN) with hands-on experience in Node.js, Express.js, MongoDB, Mongoose and React.js, plus React Native for mobile.',
  'I build RESTful APIs, dynamic user interfaces and manage application state with Redux. I like component-based architecture and wiring frontends cleanly to backend services.',
  'Currently pursuing a BCA and building real-world projects, keen to grow inside a team-oriented environment.',
];

export const highlights = [
  { icon: '⚙️', title: 'REST API Builder', text: 'Secure routing, MVC structure and clean folder organisation across Express backends.' },
  { icon: '⚛️', title: 'React & Redux', text: 'Multi-page React apps with hooks, reusable components and Redux state management.' },
  { icon: '📱', title: 'React Native', text: 'Mobile interfaces built with props, hooks and component logic.' },
];

export const skillGroups = [
  { icon: '🎨', title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Native', 'Redux'], text: 'Component-based UIs with props, hooks and global state.' },
  { icon: '🖥️', title: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'MVC'], text: 'REST APIs with structured routing and controllers.' },
  { icon: '🗄️', title: 'Database', items: ['MongoDB', 'Mongoose', 'MongoDB Compass'], text: 'Schema design and querying with Mongoose models.' },
  { icon: '🔧', title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'NPM', 'JSON'], text: 'Version control, API testing and everyday dev tooling.' },
];

export const timeline = [
  {
    type: 'EDUCATION',
    id: 'EDU-BCA',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'Mangalayatan University',
    date: '2025 – Present',
    points: ['Pursuing a computer applications degree while building full-stack projects alongside.'],
    active: true,
  },
  {
    type: 'CERTIFICATION',
    id: 'CERT-NODE',
    title: 'Node.js - The Complete Guide to Build RESTful APIs',
    org: 'Udemy',
    date: 'Certificate',
    points: ['Covers building and structuring RESTful APIs with Node.js.'],
  },
  {
    type: 'EDUCATION',
    id: 'EDU-XII',
    title: 'Senior Secondary (Class XII)',
    org: 'Govt. Co-Ed Sr. Sec. School, Preet Vihar',
    date: '2024',
    points: [],
  },
  {
    type: 'EDUCATION',
    id: 'EDU-X',
    title: 'Secondary (Class X)',
    org: 'Govt. Co-Ed Sr. Sec. School, Preet Vihar',
    date: '2021',
    points: [],
  },
];

// Add real repo / live links in `repo` and `live` for each project.
export const projects = [
  { icon: '🛍️', title: 'Lumen', kind: 'E-commerce · MERN', tags: ['React', 'Node.js', 'MongoDB', 'Razorpay'], text: 'Full-stack store with authentication, server-side price calculation and Razorpay payment verification.', repo: '', live: '', featured: true },
  { icon: '📦', title: 'Inventory System', kind: 'Full Stack', tags: ['React', 'Express', 'MongoDB'], text: 'Manage stock with REST APIs, Mongoose models and a React dashboard.', repo: '', live: '' },
  { icon: '💬', title: 'Chat App', kind: 'Full Stack', tags: ['React', 'Node.js', 'Redux'], text: 'Chat application with Redux-managed state across multiple pages.', repo: '', live: '' },
  { icon: '📝', title: 'Note Keeper', kind: 'React', tags: ['React', 'JavaScript', 'CSS3'], text: 'Create, edit and organise notes in a clean component-based interface.', repo: '', live: '' },
  { icon: '🌦️', title: 'Weather App', kind: 'React', tags: ['React', 'REST API', 'JavaScript'], text: 'Live weather lookup by city using a third-party REST API.', repo: '', live: '' },
  { icon: '🧩', title: 'Tetris & Sudoku', kind: 'JavaScript Games', tags: ['JavaScript', 'Game logic'], text: 'Classic puzzle games built to practise algorithms and DOM/state handling.', repo: '', live: '' },
];
