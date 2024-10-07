import React from 'react';

/**
 * Props for the NewsItem component.
 */
interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

/**
 * Single news item with icon, text, and link.
 * @param {string} icon - The icon of the news.
 * @param {string} text - The news text.
 * @param {string} link - The URL of the news.
 */
const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => {
  return (
    <div className="news-item">
      <img src={icon} alt="icon" />
      <a href={link}>{text}</a>
    </div>
  );
};

export default NewsItem;
