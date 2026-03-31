import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

const studentProfile = {
  name: 'Soham Pawar',
  title: 'Computer Science Student',
  tagline: 'I build clean, practical web experiences and keep learning through hands-on projects.',
  about:
    'I am a Computer Science student with a strong interest in frontend development, JavaScript, and building user interfaces with React. I enjoy turning ideas into responsive applications and improving my problem-solving skills through coding practice.',
  email: 'soham.pawar@studentmail.com',
  location: 'India',
  education: 'B.Sc. / B.Tech. in Computer Science',
  objective:
    'To grow as a software developer by creating real-world applications, strengthening React fundamentals, and contributing to meaningful projects.',
  skills: [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'Git and GitHub',
    'Node.js Basics',
    'Problem Solving',
  ],
  projects: [
    {
      title: 'Student Portfolio UI',
      description:
        'A personal portfolio interface built with React using reusable components and dynamic content rendering.',
      techStack: 'React, JSX, CSS',
    },
    {
      title: 'Course Tracker',
      description:
        'A dashboard concept for managing subjects, assignment deadlines, and weekly study targets.',
      techStack: 'JavaScript, CSS, Local State',
    },
    {
      title: 'Mini Weather App',
      description:
        'A lightweight frontend project that displays weather details with a clean, mobile-friendly layout.',
      techStack: 'HTML, CSS, JavaScript',
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

function App() {
  return (
    <div className="app-shell">
      <Header
        name={studentProfile.name}
        title={studentProfile.title}
        tagline={studentProfile.tagline}
        links={studentProfile.links}
      />
      <main className="portfolio-layout">
        <About
          about={studentProfile.about}
          education={studentProfile.education}
          objective={studentProfile.objective}
          email={studentProfile.email}
          location={studentProfile.location}
        />
        <Skills skills={studentProfile.skills} />
        <Projects projects={studentProfile.projects} />
      </main>
      <Footer name={studentProfile.name} />
    </div>
  );
}

export default App;
