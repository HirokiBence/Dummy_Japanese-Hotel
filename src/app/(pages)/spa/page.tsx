import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="main">
      <section className="sub-top">
        <div className="sub-top__image sub-top__image--onsen"></div>
        <h2 className="sub-top__title" data-aos="fade-in">温泉</h2>
      </section>
      <article className="sub-article">
        <section className="sub-article__breadcrumb breadcrumb">
          <ol className="breadcrumb__list">
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/">トップ</Link>
            </li>
            <li className="breadcrumb__item">
              <Link className="breadcrumb__link" href="/spa/">温泉</Link>
            </li>
          </ol>
        </section>
        <section className="sub-article__intro sub-intro" data-aos="fade-in">
          <p className="sub-intro__text">心も身体も癒やす汐の温泉。<br/>湯あたりしにくく、赤ちゃんから年配の方までどなたでもゆっくりと安心して入っていただけます。<br/>柔らかく優しい湯にじっくりと漬かれば、心身共にリラックスできます。</p>
        </section>
        <section className="sub-article__contents">
          <div className="sub-article__media sub-media">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/onsen/onsen01.jpg" width={525} height={300} alt="温泉付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">貸し切り露天風呂「雲居の湯」</h3>
                <p className="sub-media__text">弱酸性の湯質が優しく肌を包み込むような心地よさ<br/>最上階の露天風呂「雲居の湯」では、湯冷めしにくい食塩泉を<br/>熱海の町並みを遠方に望みながら・・・</p>
              </div>
            </div>
          </div>
          <div className="sub-article__media sub-media sub-media--reverse">
            <div className="sub-media__image-wrapper" data-aos="fade-in">
              <Image className="sub-media__image" src="/onsen/onsen02.jpg" width={525} height={300} alt="庭園付き客室の写真"/>
            </div>
            <div className="sub-media__bg" data-aos="fade-up">
              <div className="sub-media__body">
                <h3 className="sub-media__title">美肌を促す乳白色の硫黄泉を</h3>
                <p className="sub-media__text">まじりっけなしの白いにごり湯。鳥海山から引いた酸性の強い硫酸塩泉を、<br/>たっぷりと掛け流しています。<br/>四季の移り変わりを、天然温泉の湯に浸りながら味わってください。</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sub-article__table table">
          <h3 className="table__title" data-aos="fade-in">温泉の効能</h3>
          <table className="table__body" data-aos="fade-left">
            <tbody>
              <tr className="table__row">
                <th className="table__header">効能</th>
                <td className="table__data">神経痛・慢性関節リューマチ・腰痛・冷え性・慢性婦人病・うちみなど</td>
              </tr>
              <tr className="table__row">
                <th className="table__header">泉質</th>
                <td className="table__data">ナトリウム・カルシウム-塩化物泉</td>
              </tr>
              <tr className="table__row">
                <th className="table__header">飲用効果</th>
                <td className="table__data--indent">弱塩化物泉は肌にやわらかなため、高齢者や病後の回復期によく、飲用すれば慢性便秘や慢性消化器病に効果があります。</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
};