import React from 'react';

interface CardProps {
  title: string;
  text: string;
  imgSrc?: string;
  children?: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc, children }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt="Card image cap" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        {children} 
      </div>
    </div>
  );
};

export default Card;
