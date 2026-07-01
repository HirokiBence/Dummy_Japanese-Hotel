'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
// import Modal from "@/components/Modal";

export default function Headernav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  window.addEventListener('resize', () => {
    if(window.innerWidth >= 544) setIsOpen(false);
  });
},[]);

return(
  <>
    <nav className="header__nav nav" data-show={isOpen ? "true" : "false"}>
      <ul className="nav__list">
        <li className="nav__item nav__item--oheya" onClick={() => setIsOpen(false)}><Link className="nav__link" href="/room/">お部屋</Link></li>
        <li className="nav__item nav__item--oryouri" onClick={() => setIsOpen(false)}><Link className="nav__link" href="/meal/">お料理</Link></li>
        <li className="nav__item nav__item--onsen" onClick={() => setIsOpen(false)}><Link className="nav__link" href="/spa/">温泉</Link></li>
      </ul>
      <div className="nav__bg" onClick={() => setIsOpen(false)}></div>
    </nav>
    <button className="header__hamburger hamburger" data-open={isOpen ? "true" : "false"} onClick={() => setIsOpen(prev => !prev)}>
      <span className="hamburger__icon"></span>
      <span className="hamburger__icon"></span>
      <span className="hamburger__icon"></span>
    </button>
  </>
  );
};