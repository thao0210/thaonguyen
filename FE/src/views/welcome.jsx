import { ReactTyped } from 'react-typed';
import '../App.css'
import { useState } from 'react';

const Welcome = ({ showView, menuRefs, onMenuClick, menuItems }) => {
    const [showLine2, setShowLine2] = useState(false);

  return (
    <>
      <img src="/logo1.svg" alt="Logo" className="logo" width={60} />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        <ReactTyped
            key="line1"
            strings={[
            "Hi, I'm Thao,"
            ]}
            typeSpeed={50}
            showCursor={false}
            onComplete={() => {
            setShowLine2(true);
            }}
        /> 
        </h1>
        <p>
        {showLine2 && (
        
            <ReactTyped
            key="line2"
            strings={[
                "Welcome to ThaoNguyen.net!",
            ]}
            typeSpeed={50}
                showCursor={false}
            /> 
        )
        }
        </p>
        <div className='menus'>
          {menuItems.map((item, index) => (
            <span
              key={index}
              ref={(el) => (menuRefs.current[index] = el)}
              className={showView === item.path ? 'active' : ''}
              onClick={() => onMenuClick(item.path, index)}
            >
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
    </>
  );
}

export default Welcome;