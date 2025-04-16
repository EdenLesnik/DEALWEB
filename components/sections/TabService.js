import Link from 'next/link';
import React, { useState } from 'react';
const TabService = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
    return (
        <>
        <section className="service-section-two">
          <div className="bg bg-pattern-1"></div>
          <div className="auto-container">
      
            <div className="work-tabs tabs-box">
              <div className="row">

                <div className="btn-column col-lg-4 col-md-4 col-md-12">
                  <div className="inner-column">
                    <div className="sec-title light">
                      <span className="sub-title">Our Services</span>
                      <h2 className="letters-slide-up text-split">Our Best Services <br/>For You</h2>
                    </div>
                    <ul className="tab-btns tab-buttons">
                      <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><sup>01.</sup> City Transport <i className="icon fa fa-angle-double-right"></i></li>
                      <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><sup>02.</sup> Online Booking <i className="icon fa fa-angle-double-right"></i></li>
                      <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><sup>03.</sup> Regular Transport <i className="icon fa fa-angle-double-right"></i></li>
                      <li className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}><sup>04.</sup> City Transport <i className="icon fa fa-angle-double-right"></i></li>
                      <li className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}><sup>05.</sup> Airport Transfer <i className="icon fa fa-angle-double-right"></i></li>
                    </ul>
                  </div>
                </div>
      
                <div className="image-column col-lg-8 col-md-8 col-md-12">
                  <div className="inner-column">
                    <div className="tabs-content">

                      <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                        <div className="image-box">
                          <div className="inner-box">
                            <figure className="image"><img src="/images/resource/service2-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                              <div className="text">Curabitur ac quam aliquam vehic ula semper sed vel elit et leo puru s Curabitur ac quam.</div>
                              <Link href="page-service-details" className="read-more">City Service</Link>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                        <div className="image-box">
                          <div className="inner-box">
                            <figure className="image"><img src="/images/resource/service2-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                              <div className="text">Curabitur ac quam aliquam vehic ula semper sed vel elit et leo puru s Curabitur ac quam.</div>
                              <Link href="page-service-details" className="read-more">Online Service</Link>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                        <div className="image-box">
                          <div className="inner-box">
                            <figure className="image"><img src="/images/resource/service2-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                              <div className="text">Curabitur ac quam aliquam vehic ula semper sed vel elit et leo puru s Curabitur ac quam.</div>
                              <Link href="page-service-details" className="read-more">Regular Service</Link>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
                        <div className="image-box">
                          <div className="inner-box">
                            <figure className="image"><img src="/images/resource/service2-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                              <div className="text">Curabitur ac quam aliquam vehic ula semper sed vel elit et leo puru s Curabitur ac quam.</div>
                              <Link href="page-service-details" className="read-more">City Service</Link>
                            </div>
                          </div>
                        </div>
                      </div>
      
                      <div className={activeIndex === 5 ? "tab active-tab" : "tab"}>
                        <div className="image-box">
                          <div className="inner-box">
                            <figure className="image"><img src="/images/resource/service2-1.jpg" alt="Image"/></figure>
                            <div className="exp-box">
                              <div className="text">Curabitur ac quam aliquam vehic ula semper sed vel elit et leo puru s Curabitur ac quam.</div>
                              <Link href="page-service-details" className="read-more">Airport Service</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default TabService
