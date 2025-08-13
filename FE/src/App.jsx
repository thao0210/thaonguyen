import { useEffect, useRef, useState } from 'react'
import Welcome from './views/welcome';
import Education from './views/education';
import Honors from './views/honors';
import Posts from './views/posts';
import Skills from './views/skills';
import Contact from './views/contact';
import AboutMe from './views/aboutMe';
import './App.css';
import Experience from './views/experience';
import { IoPerson } from "react-icons/io5";
import { MdOutlineWork, MdArticle } from "react-icons/md";
import { FaGraduationCap, FaMedal, FaTools } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const menuItems = [
  { name: 'About Me', path: 'about', icon: <IoPerson />},
  { name: 'Experience', path: 'experience', icon: <MdOutlineWork /> },
  { name: 'Education', path: 'education', icon: <FaGraduationCap /> },
  { name: 'Skills', path: 'skills', icon: <FaTools /> },
  { name: 'Honors & Awards', path: 'honors', icon: <FaMedal /> },
  { name: 'Blog', path: 'posts', icon: <MdArticle /> },
  { name: 'Contact', path: 'contact', icon: <IoMdMail /> }
];

function App() {
  const [showView, setShowView] = useState(null);
  const [lineStyles, setLineStyles] = useState([]);
  const contentRef = useRef(null);
  const menuRefs = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuClick = (path, index) => {
    setSelectedIndex(index);
    setShowView(path);
  };

  useEffect(() => {
  if (selectedIndex === null || !contentRef.current) return;

  const menuEl = menuRefs.current[selectedIndex];
  const contentEl = contentRef.current;
  if (!menuEl || !contentEl) return;

  const menuRect = menuEl.getBoundingClientRect();
  const contentRect = contentEl.getBoundingClientRect();
  const centerX = menuRect.left + menuRect.width / 2;
  
  setLineStyles(prev =>
    prev.map((line, i) =>
      i === selectedIndex
        ? {
            top: menuRect.bottom,
            left: centerX,
            height: (contentRect.top - menuRect.bottom) + menuRect.height
          }
        : { ...line, height: 0 }
    )
  );
}, [showView]);

  useEffect(() => {
    // Khởi tạo tất cả line = height 0
    setLineStyles(menuItems.map(() => ({
      top: 0,
      left: 0,
      height: 0
    })));
  }, []);

  return (
    <div className="App">
          {lineStyles.map((line, i) => (
            <div
              key={i}
              className="line"
              style={{
                top: line.top,
                left: line.left,
                height: line.height,
                transition: "height 0.4s ease"
              }}
            />
          ))}

         <Welcome 
          ssetShowView={setShowView}
          showView={showView}
          menuRefs={menuRefs}
          onMenuClick={handleMenuClick}
          menuItems={menuItems}
        />
        {showView && (
         <div key={showView} ref={contentRef} className="content">
         {
          showView === 'about' && <AboutMe />
         }
         {
          showView === 'experience' && <Experience />
         }
         {
          showView === 'education' && <Education />
         }
         {
          showView === 'honors' && <Honors />
         }
         {
          showView === 'posts' && <Posts />
         }
         {
          showView === 'skills' && <Skills />
         }
         {
          showView === 'contact' && <Contact />
         }
         </div>
        )}
    </div>
  )
}

export default App
