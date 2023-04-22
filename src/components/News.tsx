import { FC } from "react";

//Icon
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

//utils
import { getTimeAgo, newTab, handleFavorite } from "../utils";

//Interface
import { IFavorite } from "../interfaces";

interface Props {
  story_url: string;
  created_at: Date;
  author: string;
  story_title: string;
  isLiked: boolean;
  story_id: number;
  setLikedNews: (favorites: IFavorite[]) => void;
}

export const News: FC<Props> = ({
  story_title,
  created_at,
  author,
  story_url,
  setLikedNews,
  isLiked,
  story_id,
}) => {
  const onLikeClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    const data: IFavorite[] = handleFavorite({
      story_title,
      created_at,
      author,
      story_url,
      story_id,
    });

    setLikedNews(data);
  };

  return (
    <article className="container_news" onClick={(e) => newTab(story_url)}>
      <div className="news_info">
        <div className="news_info_title">
          <span>
            <MdOutlineWatchLater />
          </span>
          <h2>{getTimeAgo(created_at, author)}</h2>
        </div>
        <p> {story_title}</p>
      </div>
      <div className="news_icon">
        <span title="Like" onClick={(e) => onLikeClick(e)}>
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
      </div>
    </article>
  );
};
