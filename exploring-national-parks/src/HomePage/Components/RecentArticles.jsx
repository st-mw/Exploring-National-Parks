import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import defaultImage from '../../../src/parkImg-default.png';

/**
 * Renders a gallery of highlighted parks.
 * @module RecentArticles
 * @memberof HomePage
 * @returns {JSX.Element} The HighlightGallery component.
 */
const RecentArticles = () => {
  const [highlightedArticles, setHighlightedArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const url = `https://developer.nps.gov/api/v1/newsreleases?limit=471&start=0&api_key=UBMbMBwA6jEjk8FLXcwwnf6leh9RfRRhoaM67qkQ`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Unable to fetch articles');
        }
        const data = await response.json();
        const randomArticles = getRandomArticles(data.data, 20);

        setHighlightedArticles(randomArticles);
        console.log(randomArticles);
      } catch (error) {
        console.log('Error Fetching articles: ', error.message);
      }
    }

    fetchArticles();
  }, []);

  const getRandomArticles = (returnedArticles, numArticles) => {
    const articles = returnedArticles.sort(() => 0.5 - Math.random()).slice(0, numArticles);
    return articles;
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery">
      <h1 className="header">See what's new!</h1>
      <Slider {...sliderSettings} className="slider">
        {highlightedArticles.map((article) => (
          <div key={article.id} className="slide">
            <h3>{article.title}</h3>
            <Link to = {`${article.url}`}><button className="more-info">Read More</button></Link>
          </div>
        ))}
      </Slider>
      </div>
  );
};

export default RecentArticles;
