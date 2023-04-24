import { FC } from "react";
import { Hit, IFavorite } from "../interfaces";
import { News } from "./News";

interface Props {
  news: Hit[];
  likedNews: IFavorite[];
  setLikedNews: (favorites: IFavorite[]) => void;
}

export const Main: FC<Props> = ({ news, setLikedNews, likedNews }) => {
  if (!news) {
    return null;
  }

  return (
    <main className="container mt-1 flex gap-1">
      {news.map((item: Hit, i: number) => {
        const isLiked = likedNews.some(
          (element: IFavorite) =>
            element.story_id === item.story_id && element.author === item.author
        );

        if (
          item.story_id &&
          item.story_title &&
          item.story_url &&
          item.created_at &&
          item.author
        ) {
          return (
            <News
              isLiked={isLiked}
              setLikedNews={setLikedNews}
              key={i}
              story_id={item.story_id}
              story_url={item.story_url}
              created_at={item.created_at}
              author={item.author}
              story_title={item.story_title}
            />
          );
        }
      })}
    </main>
  );
};
