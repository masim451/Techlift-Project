import React from 'react'

function Service() {
  return (
    <div>
         <section className="services-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-pic">
                <img src="img/services/service-pic.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-items">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-item bg-gray">
                      <img src="img/services/service-icon-1.png" alt="" />
                      <h4>Strategies</h4>
                      <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                        montes.</p>
                    </div>
                    <div className="services-item bg-gray pd-b">
                      <img src="img/services/service-icon-3.png" alt="" />
                      <h4>Workout</h4>
                      <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                        montes.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-item">
                      <img src="img/services/service-icon-2.png" alt="" />
                      <h4>Yoga</h4>
                      <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                        montes.</p>
                    </div>
                    <div className="services-item pd-b">
                      <img src="img/services/service-icon-4.png" alt="" />
                      <h4>Weight Loss</h4>
                      <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient
                        montes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service