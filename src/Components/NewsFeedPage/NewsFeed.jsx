import React from "react";
import './NewsFeed.css';
import NewsImage from '../../assets/NewsImage.svg';
import farmerImage from '../../assets/farmerImage.svg'
import catImage from '../../assets/catImage.svg'
import card from '../../assets/card.svg'

const NewsFeed = () => {
  return (
    <div className="news-feeder">
       <div className="header-wrap">
        <h2>News Feed</h2>
        <p>See the latest news on First Multiple, Press releases, media, blogs, and  articles across the globe.</p>
        </div>
      <div className="news-feed-container">
      <div className="news-grid">
        <div className="news-card">
          <img src={NewsImage} alt="News" />
          <div className="text-link">
            <p className="underline">By Salihu</p>
            <p>16/8/2022</p>
          </div>
          <div className="card-text">
          <h4>An Introduction to First Multiple E-Channel Services</h4>
          <p>Customer can pay for products and services at anytime and anywhere through our single click payment channels...</p>
          </div>
          <button className="btn-feed">read more</button>
        </div>
        <div className="news-card">
          <img src={farmerImage} alt="News" />
          <div className="text-link">
            <p className="underline">By Salihu</p>
            <p>16/8/2022</p>
          </div>
            <div className="card-text">
            <h4>Getting your loan as a small scale farmer </h4>
            <p>Customer can pay for product and services at anytime and any where through our single click payment channenl...</p>
            </div>
          <button className="btn-feed">read more</button>
        </div>
        <div className="news-card">
          <img src={catImage} alt="News" />
          <div className="text-link">
            <p className="underline">By Salihu</p>
            <p>16/8/2022</p>
          </div>
            <div className="card-text">
            <h4>What saving with us feel like</h4>
            <p>Customer can pay for products and services at anytime and anywhere through our single click payment channels...</p>
            </div>
          <button className="btn-feed">read more</button>
        </div>
        <div className="news-card">
          <img src={card} alt="News" />
          <div className="text-link">
            <p className="underline">By Salihu</p>
            <p>16/8/2022</p>
          </div>
            <div className="card-text">
            <h4  className="card-text">Welcome to first mulyiple Micro financal Bank</h4>
            <p>Customer can pay for products and services at anytime and anywhere through our single click payment channels...</p>
            </div>
          <button className="btn-feed">read more</button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default NewsFeed;
