import React from 'react';
import Card from './Card';
import pic from '../assets/pic.png';

const CardList: React.FC = () => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-4">
        <Card
          title="Card title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          imgSrc={pic}
          >
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
      </div>
      <div className="col-sm-6 mb-4">
        <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        >
            <a href="#" className="btn btn-primary">Go somewhere else</a>
        </Card>
      </div>
    </div>
  );
};

export default CardList;
