import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs';
import { Client } from '@/libs/microcms';

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
async function GetPosts(filter: string) {
  try{
    const data = await Client.get({
      endpoint: "news",
      queries:  {
        limit: 6,
        orders: 'createdAt',
        filters: `category[equals]${filter}`,
      },
    });
    return data.contents;

  }catch(err){
    if(err instanceof Error){
      console.log('お知らせ情報を取得できませんでした');
      console.error('microCMS fetch error', err.message);
    }else{
      console.log('お知らせ情報を取得できませんでした');
      console.error('microCMS fetch error', err);
    }
    return [];
  };
};

export default async function PostList({id}: {id: string}) {
  const Posts: Post[] = await GetPosts(id);
  return(
    Posts.map(post => (
      <li key={post.id} className="news__item" data-category={""}>
        <Link className="news__link column" href="#">
          <div className="column__image-wrapper">
            <Image
              className="column__image"
              src={post.thumbnail.url}
              width={post.thumbnail.width}
              height={post.thumbnail.height}
              alt=""
            />
          </div>
          <div className="column__body">
            <time className="column__time">{dayjs(post.createdAt).format("YYYY.MM.DD")}</time>
            <p className="column__text">{post.title}</p>
          </div>
        </Link>
      </li>
    ))
  )
}