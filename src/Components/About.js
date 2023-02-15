import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-pic">
                <img src="img/about-pic.jpg" alt="" />
                <Link to="https://www.youtube.com/watch?v=SlPhMPnQ58k" className="play-btn video-popup">
                  <img src="img/play.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h2>Story About Us</h2>
                <p className="first-para">MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. 
                Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app's food database that contains over 14 million foods. 
                It's not just a free calorie counter app — it's also the best calorie counter app for people who are looking to take back control of their health and fitness.</p>
                <Link to="#" className="primary-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About