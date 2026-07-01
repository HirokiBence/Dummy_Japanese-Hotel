'use client'

import { Children, useState, ReactNode } from "react";

export default function TabPanel({children}: {children: ReactNode}) {
  const [activeTab, setActiveTab] = useState("営業情報");
  const items = Children.toArray(children); // ?
  const hoursNews = items[0]; 
  const otherNews = items[1];

  return(
    <>
      <ul className="news__category" data-aos="fade-in">
        <li 
          className="news__tab"
          data-active={activeTab === "営業情報" ? "true" : "false"}
          onClick={() => setActiveTab("営業情報")}
        >営業情報</li>
        <li 
          className="news__tab"
          data-active={activeTab === "その他" ? "true" : "false"}
          onClick={() => setActiveTab("その他")}
        >その他</li>
      </ul>
      <ul className="news__list news__page" data-aos="fade-left">
        {activeTab === "営業情報" && hoursNews}
        {activeTab === "その他" && otherNews}
      </ul>
    </>
  );
};