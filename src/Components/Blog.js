import React from 'react'

function Blog() {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Latest Blog</h2>
                    </div>
                </div>
            </div>
            
            <div className="card-deck">

              <div className="card">
                <img className="card-img-top" src="img/blog/blog-1.jpg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">YOGA</h5>
                  <p className="card-text">Yoga is both spiritual & physical. Yoga uses breathing techniques and meditation. It helps to improve health & happiness. Yoga reduces stress,improves coordination,flexibility,concentration,sleep and digestion.</p>
                  <p className="card-text"><small className="text-muted">February 17, 2019</small></p>
                </div>
              </div>
              
              <div className="card">
                <img className="card-img-top" src="img/blog/blog-2.jpg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Aerobics Studio</h5>
                  <p className="card-text">Get in shape, lose weight and burn fat with Velocity Health and Fitness's Aerobics Studio. We assure you of premium quality fitness. Register yourself and pick up the best spot for yourself.</p>
                  <p className="card-text"><small className="text-muted">February 17, 2019</small></p>
                </div>
              </div>
              
              <div className="card">
                <img className="card-img-top" src="img/blog/blog-3.jpg" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Diet Program</h5>
                  <p className="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  <p className="card-text"><small className="text-muted">February 17, 2019</small></p>
                </div>
              </div>
        </div>
      </div>
  </div>
  )
}

export default Blog