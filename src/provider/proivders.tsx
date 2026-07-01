'use client';

import React from 'react';
import AOS from 'aos'; // 追加
import 'aos/dist/aos.css';  // 追加

export default function Providers() {
  React.useEffect(() => {  // 追加
    AOS.init({
      once: true,
      duration: 1500,
      easing: 'ease-in',
    });
  },[]);

React.useEffect(() => {
  const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver(invertColor, option);
  
    const header = document.querySelector('header');
    const mv = document.querySelector('.top');
    if(mv) observer.observe(mv);

    function invertColor(entries: IntersectionObserverEntry[]){
      entries.forEach(entry => {
        if(entry.isIntersecting){
          header?.classList.remove('inversion');
        }else{
          header?.classList.add('inversion');
        }
      });
    };
  },[])

  return null;
};