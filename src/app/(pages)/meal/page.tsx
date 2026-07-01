import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="main">
      <section className="sub-top">
        <h2 className="sub-top__title" data-aos="fade-in">お料理</h2>
        <div className="sub-top__image sub-top__image--oryouri"></div>
      </section>
      <article className="sub-article">
        <section className="sub-article__breadcrumb breadcrumb">
          <ol className="breadcrumb__list">
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/">トップ</Link>
            </li>
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/meal/">お料理</Link>
            </li>
          </ol>
        </section>
        <section className="sub-article__intro sub-intro" data-aos="fade-in">
          <p className="sub-intro__text">地元熱海の市場で仕入れた食材のみを使った食材をふんだんに使い、<br/>大将の技が光る「熱海料理」<br/>四季ごと、日ごとに変化する味わいを、どうぞご堪能ください。</p>
        </section>
        <section className="sub-article__contents">
          <div className="sub-article__media sub-media">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oryouri/menu01.jpg" width={525} height={300} alt="温泉付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">地元食材にこだわった会席料理</h3>
                <p className="sub-media__text">みずみずしくほのかに甘い野菜、新鮮で味に深みがある魚介類、肉類。<br/>旬の素材をそのままに生かす、経験に裏打ちされた確かな技。<br/>四季ごと、日ごとに変化する味わいを、どうぞご堪能ください。</p>
              </div>
            </div>
          </div>
          <div className="sub-article__media sub-media sub-media--reverse">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oryouri/menu02.jpg" width={525} height={300} alt="庭園付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">熱海の漁港で目利きの品を</h3>
                <p className="sub-media__text">石井花壇でお出しする料理はすべて料理長である大将の目利きで、<br/>熱海の魚市場でその日のうちに仕入れたものを使用しております。<br/>日本海の宝玉を十分にお楽しみください。</p>
              </div>
            </div>
          </div>
          <div className="sub-article__media sub-media">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oryouri/menu03.jpg" width={525} height={300} alt="一般客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">食材が一流、職人も一流</h3>
                <p className="sub-media__text">石井花壇の料理人は料亭で20年経験を積んだものばかり。<br/>その時の最も旬な食材を、最高の調理でお届けします。<br/>また、お料理への細かいご要望にもお答えできますので、<br/>お気軽にお申し付けください。</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};