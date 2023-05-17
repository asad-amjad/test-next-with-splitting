import React, { useEffect, useRef } from 'react';
import splitting from 'splitting';

const SplitText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const elements = splitting({ target: textRef.current });
    return () => {
      elements.forEach(element => element.revert());
    };
  }, [text]);

  return <div ref={textRef}>{text}</div>;
};

export default SplitText;
