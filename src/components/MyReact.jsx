import { useState, useEffect } from 'react';

export default function MyInteractiveComponent() {
  const [content, setContent] = useState("Waiting for you to see this...");

  useEffect(() => {
    console.log("MyInteractiveComponent is now visible.");
    // Wait 2 seconds before updating the content
    setTimeout(() => {
      setContent("Content loaded on demand!");
    }, 2000);
  }, []);

  return (
    <div>{content}</div>
  );
}