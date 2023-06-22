import React, { useState, useEffect } from "react";
import axios from "axios";
import './portfolio.css';

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://strange-hare-shirt.cyclic.app/api/portfolio").then(response => {
        const formatedData = response.data.data.map(item => ({
            id: item._id,
            image: item.image,
            title: item.title,
            github: item.github,
            demo: item.demo
        }));
        setData(formatedData)
    }).catch(error => {
        console.log("Error Fetching Portfolio data:", error);
    })
  }, [])

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn white_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={demo}
                className="btn whiteborder btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))
        
        }
      </div>
    </section>
  );
};

export default Portfolio;