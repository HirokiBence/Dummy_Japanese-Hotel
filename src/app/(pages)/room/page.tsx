import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="main">
      <section className="sub-top">
        <div className="sub-top__image sub-top__image--oheya"></div>
        <h2 className="sub-top__title" data-aos="fade-in">お部屋</h2>
      </section>
      <article className="sub-article">
        <section className="sub-article__breadcrumb breadcrumb">
          <ol className="breadcrumb__list">
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/">トップ</Link>
            </li>
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/room/">お部屋</Link>
            </li>
          </ol>
        </section>
        <section className="sub-article__intro sub-intro" data-aos="fade-in">
          <p className="sub-intro__text">創業より受け継がれてきた石井花壇の和の造り<br/>温海の雄大な絶景を堪能していただけるように設計された客室<br/>ゆるやかに流れ行く時間に身を委ねて</p>
        </section>
        <section className="sub-article__contents">
          <div className="sub-article__media sub-media">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oheya/oheya01.jpg" width={525} height={300} alt="温泉付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">温泉付き客室</h3>
                <p className="sub-media__text">温海の源泉かけ流し露天風呂付き客室になります。<br/>あなただけの上質な安らぎのひとときを。</p>
                <p className="sub-media__attention">＊部屋数に限りがございます。<br/>＊洗い場はないため、お体を先に大浴場でお流しになって頂く必要があります。</p>
              </div>
            </div>
          </div>
          <div className="sub-article__media sub-media sub-media--reverse">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oheya/oheya02.jpg" width={525} height={300} alt="庭園付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">庭園付き客室</h3>
                <p className="sub-media__text">庭園付きの客室になります。<br/>お庭を見ながら、ほっとするひとときをお過ごしください。</p>
                <p className="sub-media__attention">＊お庭は複数のお客様と囲む形になります。<br/>＊部屋数に限りがあります。<br/>＊ご希望の方は「お抹茶/500円」をルームサービスさせていただきます。</p>
              </div>
            </div>
          </div>
          <div className="sub-article__media sub-media">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/oheya/oheya03.jpg" width={525} height={300} alt="一般客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">一般客室</h3>
                <p className="sub-media__text">最もベーシックな客室になります。伝統の中にモダンさを取り入れた<br/>内装となっており、とても過ごしやすくしていただけます。<br/></p>
                <p className="sub-media__attention">＊全室お部屋より日本海を望むことができます。</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};