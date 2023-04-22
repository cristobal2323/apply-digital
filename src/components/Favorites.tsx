import { FC } from "react";
import { IFavorite } from "../interfaces";
import { News } from "./News";

interface Props {
  likedNews: IFavorite[];
  setLikedNews: (favorites: IFavorite[]) => void;
}

export const Favorites: FC<Props> = ({ likedNews, setLikedNews }) => {
  return (
    <main className="container mt-1 flex gap-1">
      {likedNews.map((item: IFavorite, i: number) => {
        if (
          item.story_id &&
          item.story_title &&
          item.story_url &&
          item.created_at &&
          item.author
        ) {
          return (
            <News
              isLiked={true}
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
