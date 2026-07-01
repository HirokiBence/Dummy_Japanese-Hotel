import Image from 'next/image';
import Link from "next/link";
import { Client } from '@/libs/microcms';
import Providers from "@/provider/proivders";

import TabMenu from '@/components/TabMenu';
import TabContent from '@/components/TabContent';

// ニュース記事の型定義
type Post = {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  category: {
    name: string,
  },
};

// microCMSからnews記事を取得
async function GetPosts() {
  try{
    const data = await Client.get({
      endpoint: "news",
      queries:  {
        limit: 6,
        orders: 'createdAt',
      },
    });
    return data.contents;
  }catch(err){
    console.log(err);
  }
}

export default async function Page(){
  const posts: Post[] = await GetPosts();
  const hoursNews = posts?.filter(post => post.category.name === "営業情報");
  const otherNews = posts?.filter(post => post.category.name === "その他");

  return(
    <>
      <main className="main">
        <section className="top">
          <div className="top__image"></div>
          <div className="top__image"></div>
          <div className="top__image"></div>
          <h1 className="top__text" data-aos="fade-in">頑張る人の<br/>頑張らない時間</h1>
        </section>
        <article className="article">
          <section className="intro">
            <div className="intro__inner">
              <div className="intro__body" data-aos="fade-in">
                <h2 className="intro__title">温海温泉の<br/><span>&emsp;&emsp;</span>美しさに癒やされて</h2>
                <p className="intro__text">東北の奥座敷である温海温泉郷<br/>開湯は約1300年前とされ、約小角が<br/>発見したと伝えられます</p>
                <p className="intro__text">石井花壇は江戸より続く由緒ある旅館で<br/>クラシックな作りの中に大正ロマンあふれる<br/>内装を残しております</p>
                <p className="intro__text">圧倒的癒やしの空間で<br/>頑張る現代人に<br/>頑張らない圧倒的な非日常をご提供します</p>
                <p className="intro__name">石井花壇</p>
              </div>
            </div>
          </section>
          <section className="contents">
            <div className="contents__inner">
              <div className="contents__media media media--oheya media--reverse">
                <div className="media__body aos-fade-in" data-aos="new-animation">
                  <h3 className="media__title">喧騒から離れた空間<br/>心落ち着く至極のひととき</h3>
                  <p className="media__text">まるで時が止まったかのような、圧倒的な静寂のなかで、<br/>ひたすらにゆったりと…。<br/>最高級の「何もしない時間」をお過ごしください。</p>
                  <button className="media__button button">
                    <Link className="button__link" href="/room/">お部屋について</Link>
                  </button>
                </div>
                <div className="media__image-wrapper" data-aos="fade-in">
                  <Image className="media__image" src="/top/oheya-top.jpg" width={656} height={436} alt="客室"/>
                </div>
              </div>
              <div className="contents__media media media--oryouri">
                <div className="media__body aos-fade-in" data-aos="new-animation">
                  <h3 className="media__title">出迎えるのは<br/>極上の温海料理</h3>
                  <p className="media__text">最も旬の食材を愉しむ、最高の贅沢を<br/>最高級A5ランクの米沢牛と共に頂く。<br/>あなたの人生史に残る「極上の感動」を<br/>お約束します。</p>
                  <button className="media__button button">
                    <Link className="button__link" href="/meal/">料理について</Link>
                  </button>
                </div>
                <div className="media__image-wrapper" data-aos="fade-in">
                  <Image className="media__image" src="/top/menu-top.jpg" width={656} height={436} alt="料理"/>
                </div>
              </div>
              <div className="contents__media media media--onsen media--reverse">
                <div className="media__body aos-fade-in" data-aos="new-animation">
                  <h3 className="media__title">疲れ切った身体にやすらぎを<br/>温海の源泉に癒やされて<br/></h3>
                  <p className="media__text">古くは弘法大師の病をも治療したと言われる熱海の泉質。<br/>現代人の疲弊しきった身体を修復する最高級の湯治場として<br/>ご活用ください。<br/></p>
                  <button className="media__button button">
                    <Link className="button__link" href="/spa/">温泉について</Link>
                  </button>
                </div>
                <div className="media__image-wrapper" data-aos="fade-in">
                  <Image className="media__image" src="/top/onsen-top.jpg" width={656} height={436} alt="温泉"/>
                </div>
              </div>
            </div>
          </section>

          <section className="recommend">
            <div className="recommend__inner">
              <div className="recommend__title section-top" data-aos="fade-in">
                <Image className="section-top__image" src="/global/logo02.png" width={40} height={40} alt=""/>
                <h3 className="section-top__title">おすすめご宿泊プラン</h3>
              </div>
              <div className="recommend__wrapper">
                <div className="recommend__item card">
                  <div className="card__image-wrapper" data-aos="fade-in">
                    <Image className="card__image" src="/top/recommended01.jpg" width={325} height={216} alt=""/>
                  </div>
                  <div className="card__body" data-aos="fade-up">
                    <h4 className="card__title">朝食付きプラン、日本近海で取れた<br/>のどぐろを朝食として…</h4>
                    <p className="card__text">最高級と称されるのどぐろ、正式には「アカムツ」と呼ばれる魚、味は独特の上品な味わいで、焼いても煮ても美味</p>
                  </div>
                </div>
                <div className="recommend__item card">
                  <div className="card__image-wrapper" data-aos="fade-in">
                    <Image className="card__image" src="/top/recommended02.jpg" width={325} height={216} alt=""/>
                  </div>
                  <div className="card__body" data-aos="fade-up">
                    <h4 className="card__title">【期間限定】熱海蟹をたっぷりと<br/>愉しむプラン。</h4>
                    <p className="card__text">温海で水揚げされた蟹は「温海蟹」<br/>として知られ、嗜好品として愛されて<br/>きました。この宿泊プランでは存分に</p>
                  </div>
                </div>
                <div className="recommend__item card">
                  <div className="card__image-wrapper" data-aos="fade-in">
                    <Image className="card__image" src="/top/recommended03.jpg" width={325} height={216} alt=""/>
                  </div>
                  <div className="card__body" data-aos="fade-up">
                    <h4 className="card__title">【平日限定】贅沢美味懐石プラン。<br/>海辺の四季旬彩プラン。</h4>
                    <p className="card__text">熱海近海で取れた魚を鮮度そのままに舟盛りにしてご提供。生きた味をお楽しみください。</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="news">
            <div className="news__inner">
              <div className="news__title section-top" data-aos="fade-in">
                <Image className="section-top__image" src="/global/logo02.png" width={40} height={40} alt=""/>
                <h3 className="section-top__title">お知らせ</h3>
              </div>
              <div></div>
              <TabMenu>
                <>
                  <TabContent key="営業情報" contents={hoursNews}/>
                  <TabContent key="その他" contents={otherNews}/>
                </>
              </TabMenu>
            </div>
          </section>

          <section className="access">
            <div className="access__inner">
              <div className="access__title section-top" data-aos="fade-in">
                <Image className="section-top__image" src="/global/logo02.png" width={40} height={40} alt=""/>
                <h3 className="section-top__title">アクセス</h3>
              </div>
              <div className="access__wrapper">
                <div className="access__image-wrapper" data-aos="fade-in">
                  <Image className="access__image" src="/top/acess.jpg" width={522} height={347} alt="旅館"/>
                </div>
                <div className="access__body" data-aos="fade-up">
                  <p className="access__text access__text--bold">住所</p>
                  <address className="access__text">〒000-0000 <br/>山形県鶴岡市xxxxxxxxxx</address>
                  <p className="access__text access__text--bold">TEL/FAX</p>
                  <address className="access__text">000-0000-0000/00-0000-0000</address>
                  <p className="access__text access__text--bold">営業時間</p>
                  <time className="access__text">14:00-23:00</time>
                  <p className="access__text">＊4名以上のご予約の場合は、最寄り駅の「鶴岡駅」より送迎が可能ですので、ご連絡ください。</p>
                </div>
              </div>
              <figure className="access__map-wrapper" data-aos="fade-in">
                <iframe
                  className="access__map"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24933.88380954258!2d139.57791799699453!3d38.63196603648585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8c6dbd6c03ae15%3A0x10bc5da99bc816ef!2z5bGx5b2i55yM6ba05bKh5biC5rip5rW3!5e0!3m2!1sja!2sjp!4v1782612131135!5m2!1sja!2sjp"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  referrerPolicy="strict-origin-when-cross-origin">
                </iframe>
              </figure>
            </div>
          </section>
        </article>
      </main>
      <Providers/>
    </>
  );
};