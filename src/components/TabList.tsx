'use client'

import {useState, ReactNode} from "react";
import Image from "next/image";

type key = 'opentime' | 'others';

const labels = {
  opentime: '営業情報',
  others: 'その他',
};

export default function TabPanel({panels}: {panels: Record<key, ReactNode>}) {
  const [active, setActive] = useState<key>("opentime");

  return(
      <section className="news">
        <div className="news__inner">
          <div className="news__title section-top" data-aos="fade-in">
            <Image className="section-top__image" src="/global/logo02.png" width={40} height={40} alt=""/>
            <h3 className="section-top__title">お知らせ</h3>
          </div>
          <nav className="news__category" data-aos="fade-in">
            {(Object.keys(panels) as key[]).map(key => (
              <button key={key} className="news__tab" data-active={key === active ? 'true' : ""} onClick={() => setActive(key)}>{labels[key]}</button>  
            ))}
          </nav>
          <ul className="news__list news__page" data-aos="fade-left">
            {panels[active]}
          </ul>
        </div>
      </section>
  );
};