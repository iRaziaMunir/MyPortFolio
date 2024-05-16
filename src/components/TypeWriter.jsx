
import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [texts, setTexts] = useState(['Hello 👋', 'Hi 👋🏻', ]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex < texts.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts]);

  return <span className='tracking-wide  text-2xl md:text-4xl lg:text-6xl text-[#1e9adf] font-semibold mb-10 animate-pulse'>{texts[currentTextIndex]}</span>;
};

export default Typewriter;