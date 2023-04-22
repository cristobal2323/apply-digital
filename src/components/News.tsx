//Icon
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
export const News = () => {
  return (
    <article className="container_news">
      <div className="news_info">
        <div className="news_info_title">
          <span>
            <MdOutlineWatchLater />
          </span>
          <h2>2 hours ago by author</h2>
        </div>
        <p> Event-driven state management in React using Storeon</p>
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
