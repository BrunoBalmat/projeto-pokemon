import React, { useEffect, useState } from 'react';
import './initialScreen.css'

interface LandingPageProps {
  landing: boolean;
  setLanding: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage: React.FC<LandingPageProps> = ({ landing, setLanding }) => {
  const [isFading, setIsFading] = useState(false);

  const handleStartClick = () => {
    setIsFading(true);
    setTimeout(() => {
      setLanding(false);
    }, 500);
  };
  

  useEffect(() => {
    if (!landing) {
      setIsFading(false);
    }
  }, [landing]);

  if (landing) {
    return (
      <main className={`landing ${isFading ? 'hidden' : ''}`}>
        <div className='logoButton'>
          <img src="Logo 1.png" alt="" />          
          <button onClick={handleStartClick}>START</button>
        </div>
      </main>
    );
  }
  return null;
};

export default HomePage;