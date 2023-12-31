import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LoginVideo from '../../assets/videos/LoginVideo.mp4';
import YourRecipes from '../../assets/videos/YourRecipes.mp4';
import AddRecipe from '../../assets/videos/AddRecipe.mp4';
import cookbook from '../../assets/images/cookbook.png';
import kitchenBackground from '../../assets/images/kitchenbackground.jpg';
import './appdemostyles.css'
import RecipeWalkThrough from '../../assets/videos/RecipeBookWalkThrough.mp4';

const AppDemo = () => {
  return (
    <div className="app-demo-container">
      <div className="container-fluid px-0 app-container">
        <div className="background-image" style={{ backgroundImage: `url(${kitchenBackground})` }} />
        <div className="demo-navbar">
          <div className="container demo-navbar-container">
            <div className="auth-navbar-brand">
              <img src={cookbook} alt="Cook Book Picture" style={{ width: '40px', height: 'auto' }} />
              <h3>Recipe Book</h3>
            </div>
            <div className="auth-navbar-links">
              <Link to="/" className="auth-navbar-link">Home</Link>
            </div>
          </div>
        </div>
        <div className="app-functionality-container">
          <h2 className="app-functionality-title">App Demo</h2>
          <div className="carousel-container">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              renderIndicator={(onClickHandler, isSelected) => (
                <div className={`custom-indicator ${isSelected ? 'active' : ''}`} onClick={onClickHandler} />
              )}
            >
              <div className="carousel-item">
                <video controls>
                  <source src={RecipeWalkThrough} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
