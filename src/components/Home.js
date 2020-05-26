import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <p>Welcome to Vodafone Homepage <span role='img' aria-label='monkey with eyes closed emoji'>🙈</span></p>
      <p>We have no offers today <span role='img' aria-label='crying face emoji'>😢</span></p>
      <div className="product-item">
        <img src="https://www.fillmurray.com/460/300" alt="Bill Murray" />
        <Link to="/basket"><button>Add to Basket</button></Link>
      </div>
    </div>
  );
};

export { Home };
