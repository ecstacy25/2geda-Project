import React from 'react';
import './Thumbnail.css'; 
import movie from "../../Assets/movie.png";

const Thumbnail = ({ title }) => {
  return (
    <div className="thumbnail-section">
      <div className='title'>
      <h3>{title}</h3>
      <ul>
        <li><a href="#">more</a></li>
      </ul>
        </div>
        
      <div className="content">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <img src={movie} alt="image" width="" height="" className="" />
            <figcaption>Top Flight maverick... <br />(2023)</figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;

