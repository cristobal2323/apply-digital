import { IFavorite } from "../interfaces";

export const getTimeAgo = (created_at: Date, author: string): string => {
  const date = new Date(created_at);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const timeAgo = hours > 0 ? `${hours} hours` : `${minutes} minutes`;
  return `${timeAgo} ago by ${author}`;
};

export const newTab = (url: string) => {
  window.open(url, "_blank");
};

export const handleFavorite = ({
  story_title,
  author,
  created_at,
  story_url,
  story_id,
}: {
  story_title: string;
  author: string;
  created_at: Date;
  story_url: string;
  story_id: number;
}) => {
  const data = {
    story_title: story_title,
    author: author,
    created_at: created_at,
    story_url: story_url,
    story_id: story_id,
  };
  const likedNews = JSON.parse(localStorage.getItem("likedNews") || "[]");
  const isLiked = likedNews.some(
    (item: IFavorite) => item.story_id === story_id && item.author === author
  );
  if (isLiked) {
    const updatedLikedNews = likedNews.filter(
      (item: IFavorite) => item.story_id !== story_id && item.author !== author
    );
    localStorage.setItem("likedNews", JSON.stringify(updatedLikedNews));
    return updatedLikedNews;
  } else {
    likedNews.push(data);
    localStorage.setItem("likedNews", JSON.stringify(likedNews));
    return likedNews;
  }
};
