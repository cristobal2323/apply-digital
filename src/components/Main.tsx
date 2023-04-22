import { FC } from "react";
import { INews, Hit } from "../interfaces";
import { News } from "./News";

interface Props {
  news: INews | undefined;
}

export const Main: FC<Props> = ({ news }) => {
  if (!news) {
    return null;
  }

  return (
    <main className="container mt-1 flex gap-1">
      {news.hits.map((item: Hit, i: number) => {
        if (
          item.story_title &&
          item.story_url &&
          item.created_at &&
          item.author
        ) {
          return (
            <News
              key={i}
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
