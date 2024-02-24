import React, { useState, useEffect, useRef } from 'react';

const Title = () => {
    const fullText = '> The first step.';
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
        <>
            <div className='my-4 min-w-[100%] mt-3 text-indigo-500  md:hidden text-center  sm:text-indigo-300  lg:text-green-300 font-semibold fill-transparent'>
                <h1 className='text-[2em] sm:text-[5em] '> {text}
                    <span className={`inline-block h-[1em] w-[0.5em] ml-[0.2em] ${showCursor ? 'bg-white' : 'bg-transparent'}`}></span>
                </h1>
                <p className='text-[13px] text-blue-300 sm:text-[1em]'>"Acelerando el desarrollo, un commit a la vez."</p>
            </div>
        </>
  );
};


export default Title;
