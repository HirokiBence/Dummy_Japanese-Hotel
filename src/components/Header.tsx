import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import Modal from "./Modal";

export default function Header(){
  return(
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo-wrapper" href="/">
          <Image className="header__logo-main" loading="eager"/* eagerの意味を調べる */ src="/global/top-header-logo.png" width={200} height={40} alt="石井花壇"/>
          <Image className="header__logo-sub" loading="eager" src="/global/sub-header-logo.png" width={200} height={40} alt="石井花壇"/>
        </Link>
        <HeaderNav/>
        <Modal/>
      </div>
    </header>
  );
};