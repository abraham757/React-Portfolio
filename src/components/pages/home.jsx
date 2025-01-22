import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const hostRef = useRef(null);

  useEffect(() => {
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });
 
      // Create a container for the social links
      const socialLinksContainer = document.createElement('div');
      socialLinksContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
        padding: 10px;
        background: rgba(181, 146, 160, 0.1);
        backdrop-filter: blur(5px);
        border-radius: 8px;
        margin: 0 20px;
      `;
 
      // Create GitHub link
      const githubLink = document.createElement('a');
      githubLink.href = 'https://github.com/abraham757'; 
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = 'Find me on GitHub';
      githubLink.style.cssText = `
        color: #2d3748;
        text-decoration: none;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 6px;
        transition: all 0.3s ease;
      `;
 
      // Add hover effect
      githubLink.addEventListener('mouseover', () => {
        githubLink.style.backgroundColor = 'rgba(181, 146, 160, 0.2)';
      });
      githubLink.addEventListener('mouseout', () => {
        githubLink.style.backgroundColor = 'transparent';
      });
 
      socialLinksContainer.appendChild(githubLink);
      shadowRoot.appendChild(socialLinksContainer);
    }
  }, []);
// add header to top of page

  
 return (
   <div className="min-h-screen bg-gradient-to-b from-[#cad2c5] to-white">
     <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <section className="text-center mb-16">
         <div className="flex justify-center mb-8">
           <div className="relative">
             <div className="absolute inset-0 bg-[#b592a0] rounded-full blur-lg opacity-20"></div>
             
           </div>
         </div>

         <div className="text-center max-w-2xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
             Abrahan Gonzalez
           </h1>
           <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
             Full Stack Web Developer student
           </h2>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
           Hello, my name is Abrahan Gonzalez, and I’m delighted to welcome you to my portfolio! I am currently immersed in the dynamic world of programming through an intensive bootcamp program. Throughout this journey, I’ve had the privilege of working with a diverse array of technologies, laying a solid foundation in modern web development principles.

From structuring web pages with HTML and enhancing their visual appeal with CSS, to creating dynamic and interactive features using JavaScript, I’ve thoroughly enjoyed transforming ideas into functional and engaging applications. Additionally, I’ve explored the intricacies of React to develop reusable and efficient user interfaces, while also mastering the integration of APIs to connect applications with external data sources.

Beyond these, I’ve had the chance to dive into Java, building reliable backend solutions, and Angular, where I’ve learned to create powerful single-page applications with a component-driven approach.

The projects showcased in this portfolio reflect my growth, dedication, and the skills I’ve developed throughout this program. Thank you for visiting and taking the time to explore my work—I hope you enjoy reviewing these projects as much as I enjoyed creating them!
           
           </p>
           <div className="flex justify-center gap-4">
             <Link 
               to="/portfolio" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>
             <Link 
               to="/contact" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>
           <div className="text-center max-w-2xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
           </h1>
           <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
           </h2>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
           </p>
           <div className="flex justify-center gap-4">
             <Link 
               to="/portfolio" 
               className="bg-[#b592a0] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
             >
               
             </Link>

</div>
<body>
<ul>My Skills</ul>
<li>Java</li>
<li>Angular</li>
<li>Html</li>
<li>Css</li>
<li>Java</li>
<li>Bootstrap</li>
<li>Typescript</li>
<li>React</li>
<li>Node Js</li>


</body>
 </div>
           </div>
         </div>
       </section>
     </main>
     {}
     <div ref={hostRef}></div>
   </div>
 );
}