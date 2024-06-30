import React, { useState, useEffect } from 'react';
import Mark2 from './Mark2';
import marked from 'marked';

const Mark1 = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // Effect to update something if needed when text changes
  }, [text]);

  return (
    <div className="mark1">
      <textarea
        className="textarea"
        onChange={handleTextChange}
        placeholder="Write your markdown here..."
      ></textarea>
      <div className="preview">
        <Mark2 text={text} />
      </div>
    </div>
  );
};

export default Mark1;
