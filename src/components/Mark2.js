import React from 'react';
import marked from 'marked';

const Mark2 = ({ text }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div
      dangerouslySetInnerHTML={getMarkdownText()}
      className="preview"
    />
  );
};

export default Mark2;
