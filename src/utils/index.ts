export const getTimeAgo = (created_at: Date, author: string): string => {
  const date = new Date(created_at);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const timeAgo = hours > 0 ? `${hours} hours` : `${minutes} minutes`;
  return `${timeAgo} ago by ${author}`;
};
