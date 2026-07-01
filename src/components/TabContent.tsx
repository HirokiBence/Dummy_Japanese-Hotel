import Image from "next/image";
import Link from "next/link";
import dayjs from 'dayjs';

export default async function TabContent({contents}: {contents: Post[]}) {

  return (
    <>
      {contents?.map((item) => (
        <li key={item.id} className="news__item">
          <Link className="news__link column" href="#">
            <div className="column__image-wrapper">
              <Image
                className="column__image"
                src={item.thumbnail.url}
                width={item.thumbnail.width}
                height={item.thumbnail.height}
                alt=""
              />
            </div>
            <div className="column__body">
              <time className="column__time">{dayjs(item.createdAt).format("YYYY.MM.DD")}</time>
              <p className="column__text">{item.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};