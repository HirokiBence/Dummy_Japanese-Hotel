'use client';

import Image from "next/image";
import { useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";  

// type SelecedtDate = Date | null;

function ShowModal({children}: {children?: ReactNode}) {
  const target = document.body;
  return createPortal(children, target);
}

export default function Modal(/* { closeModal }: ModalPorps */){
  const [isModal, setIsModal] = useState(false);

  return(
    <>
      <button className="header__right header__button staybutton" onClick={() => setIsModal(true)}>
        <Image className="staybutton__icon" src="/global/calender.svg" width={22} height={22} alt=""/>
        <span className="staybutton__text">宿泊予約</span>
      </button>
      {isModal && 
        <ShowModal>
          <ModalContent setIsModal={setIsModal}/>
        </ShowModal>}
    </>
  );
};