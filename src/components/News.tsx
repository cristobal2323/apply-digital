import { FC } from "react";

//Icon
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

//utils
import { getTimeAgo } from "../utils";

interface Props {
  story_url: string;
  created_at: Date;
  author: string;
  story_title: string;
}

export const News: FC<Props> = ({ story_title, created_at, author }) => {
  return (
    <article className="container_news">
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
        <span title="Like">
          <AiOutlineHeart />
        </span>
        {/* <AiFillHeart /> */}
      </div>
    </article>
  );
};
