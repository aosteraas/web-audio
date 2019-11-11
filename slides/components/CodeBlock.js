import React from 'react';
import { Prism as Highlight } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { defaultProps } from 'prism-react-renderer';

export function CodeBlock({ children, customStyle, language = 'html' }) {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      // style={atomDark}
      customStyle={customStyle}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
