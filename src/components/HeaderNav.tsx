'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";

export default function Headernav() {
  const [isGlobalNav, setIsGlobalNav] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState<"fade-in" | "fade-out" | null>(null);
  const DURATION = 1000; //ms

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 544) setIsGlobalNav(false);
    });
  },[]);

  // 一番最初だけちらつく
  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
      if(animationType === "fade-out"){
        setIsModal(false);
      }
    }, DURATION);
  }, [animationType]);

  function openModal(){
    setIsGlobalNav(false);
    setIsModal(true);
    setIsAnimating(true);
    setAnimationType("fade-in");
  }
  
  function closeModal(){
    if(isAnimating) return;

    setIsAnimating(true);
    setAnimationType("fade-out");
  }

  return(
    <>
      <nav className="header__nav nav" data-show={isGlobalNav ? "true" : "false"}>
        <ul className="nav__list">
          <li className="nav__item nav__item--oheya" onClick={() => setIsGlobalNav(false)}><Link className="nav__link" href="/room/">お部屋</Link></li>
          <li className="nav__item nav__item--oryouri" onClick={() => setIsGlobalNav(false)}><Link className="nav__link" href="/meal/">お料理</Link></li>
          <li className="nav__item nav__item--onsen" onClick={() => setIsGlobalNav(false)}><Link className="nav__link" href="/spa/">温泉</Link></li>
        </ul>
        <div className="nav__bg" onClick={() => setIsGlobalNav(false)}></div>
        <button className="header__right header__button staybutton" onClick={openModal}>
          <Image className="staybutton__icon" src="/global/calender.svg" width={22} height={22} alt=""/>
          <span className="staybutton__text">宿泊予約</span>
        </button>
        {isModal && <Modal closeModal={closeModal} animationType={animationType} duration={DURATION} />}
      </nav>
      <button className="header__hamburger hamburger" data-open={isGlobalNav ? "true" : "false"} onClick={() => setIsGlobalNav(prev => !prev)}>
        <span className="hamburger__icon"></span>
        <span className="hamburger__icon"></span>
        <span className="hamburger__icon"></span>
      </button>
    </>
  );
};