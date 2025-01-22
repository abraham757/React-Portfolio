// Footer.jsx
import React, { useRef, useEffect } from 'react';

function Footer() {
  const hostRef = useRef(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });

      // Create footer container
      const footerContainer = document.createElement('div');
      footerContainer.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding: 10px;
        background: rgba(43, 28, 177, 0.1);
        backdrop-filter: blur(5px);
        margin: 0;
        display: flex;
        justify-content: center;
        gap: 20px;
      `;

      // Common link styles
      const linkStyle = `
        color:rgb(6, 50, 126);
        text-decoration: none;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 6px;
        transition: all 0.3s ease;
      `;

      // Create GitHub link
      const githubLink = document.createElement('a');
      githubLink.href = 'https://github.com/abraham757';
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = 'GitHub';
      githubLink.style.cssText = linkStyle;



      // Go to contact sheet
      const emailLink = document.createElement('a');
      emailLink.href = 'src /componenets/pages/contact.jsx';
      emailLink.target ='_blank';      
      emailLink.rel = 'noopener noreferrer';
      emailLink.style.cssText = linkStyle;
      emailLink.textContent= 'Email';


      //https://www.linkedin.com/in/abrahan-gonzalez-1576b25b/

      const linkedin = document.createElement('a');
      linkedin.href='https://www.linkedin.com/in/abrahan-gonzalez-1576b25b/';
      linkedin.textContent= 'Linkedin';
      linkedin.style.cssText = linkStyle;
      linkedin.rel = 'noopener noreferrer';


      // Add hover effect to all links
      const links = [githubLink, emailLink, linkedin];
      links.forEach(link => {
        link.addEventListener('mouseover', () => {
          link.style.backgroundColor = 'rgba(26, 8, 15, 0.2)';
        });
        link.addEventListener('mouseout', () => {
          link.style.backgroundColor = 'transparent';
        });
      });

     

      // Append all elements to footer container
      footerContainer.appendChild(githubLink);
      footerContainer.appendChild(emailLink);
      footerContainer.appendChild(linkedin);

      // Add footer container to shadow root
      shadowRoot.appendChild(footerContainer);
    }
  }, []);

  return <div ref={hostRef}></div>;
}

export default Footer;