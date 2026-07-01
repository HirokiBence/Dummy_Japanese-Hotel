import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer__inner" data-aos="fade-in">
        <div className="footer__sitemap">
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item"><Link className="footer__link" href="/spa/">温 泉</Link></li>
              <li className="footer__item"><Link className="footer__link" href="/meal/">お 料 理</Link></li>
              <li className="footer__item"><Link className="footer__link" href="/room/">お 部 屋</Link></li>
            </ul>
          </div>
          <Link className="footer__logo-wrapper" href="/">
            <Image className="footer__logo" src="/global/footer-logo.png" width={146} height={92} alt="石井花壇"/>
          </Link>
          <div className="footer__address">
            <address className="footer__text">〒000-0000</address>
            <address className="footer__text--wide">山形県鶴岡市xxxxxxxxxxx</address>
          </div>
          <div className="footer__number">
            <address className="footer__text">TEL.000-0000-0000</address>
            <address className="footer__text">FAX.00-0000-0000</address>
          </div>
      </div>
        <div className="footer__copyright-wrapper">
          <small className="footer__copyright">Copyright © 石井花壇 All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};