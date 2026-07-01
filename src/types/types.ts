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