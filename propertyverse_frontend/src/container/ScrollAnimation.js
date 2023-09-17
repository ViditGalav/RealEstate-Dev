// ScrollAnimation.js
import React, { useEffect } from 'react';

const ScrollAnimation = ({ children }) => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in, .slide-fwd, .fade-out, .fade-out-up, .spin, .fade-in-up, .bounce, .scale-up, .cursor-blink'
    );

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);

  return <div>{children}</div>;
};

export default ScrollAnimation;
