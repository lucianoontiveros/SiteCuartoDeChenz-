import React, { useState, useEffect} from 'react';

const FirstTitle = () => {
    const fullText = '> The first step to create.';
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      let index = 0;
      const textIntervalId = setInterval(() => {
        setText((prevText) => prevText + fullText[index]);
        index++;
        if (index === fullText.length -1 ) {
          clearInterval(textIntervalId);
        }
      }, 100); // Ajusta la velocidad de escritura aquí
  
      const cursorIntervalId = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, 500); // Ajusta la velocidad de parpadeo del cursor aquí
  
      return () => {
        clearInterval(textIntervalId);
        clearInterval(cursorIntervalId);
      };
    }, []);
  
    return (
      <div className='text-6xl hidden md:block absolute  text-green-300 font-semibold fill-transparent'>
        <h1> {text}
            <span className={`inline-block h-[1em] w-[0.5em] ml-[0.2em] ${showCursor ? 'bg-white' : 'bg-transparent'}`}></span>
        </h1>
      </div>
  );
};


export default FirstTitle;

