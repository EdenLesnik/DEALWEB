import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const TabBooking = () => {
  const [isOpen, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
    return (
        <>
        <section className="booking-section-two">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-icon"></span>
              <span className="sub-title">Taxi Booking Form</span>
              <h2 className="letters-slide-up text-split">Book your Taxi Online</h2>
            </div>
      
            <div className="booking-tab tabs-box">
              <div className="row">
                <div className="tab-btns-outer col-lg-3 col-md-3 col-sm-12">
                  <ul className="tab-btns tab-buttons">
                    <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>Standard <i className="icon fa fa-circle-dot"></i></li>
                    <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>Business <i className="icon fa fa-circle-dot"></i></li>
                    <li className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>Conomy <i className="icon fa fa-circle-dot"></i></li>
                    <li className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>Vip <i className="icon fa fa-circle-dot"></i></li>
                    <li className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>Minivan <i className="icon fa fa-circle-dot"></i> </li>
                  </ul>
                </div>
      
                <div className="tabs-content col-lg-9 col-md-9 col-sm-12">

                  <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                    <div className="row">
      
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="booking-form style-two">
                            <form method="get" action="#">
                              <div className="row">
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="Start Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="End Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="text" name="name" placeholder="Complete Name" required/>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="email" name="email" placeholder="Email Address" required/>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="tel" name="phone" placeholder="Phone No" required/>
                                    <i className="icon fal fa-mobile"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <button type="submit" className="theme-btn btn-style-one dark-line-two hover-light"><span className="btn-title">Find a Taxi</span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
      
                      <div className="video-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <figure className="image"><img src="/images/resource/booking2-1.jpg" alt="Image"/></figure>
                          <a onClick={() => setOpen(true)} className="play-btn"><div className="icon-triangle fas fa-caret-right"></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                    <div className="row">
      
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="booking-form style-two">
                            <form method="get" action="#">
                              <div className="row">
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="Start Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="End Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="text" name="name" placeholder="Complete Name" required/>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="email" name="email" placeholder="Email Address" required/>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="tel" name="phone" placeholder="Phone No" required/>
                                    <i className="icon fal fa-mobile"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <button type="submit" className="theme-btn btn-style-one dark-line-two hover-light"><span className="btn-title">Find a Taxi</span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
      
                      <div className="video-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <figure className="image"><img src="/images/resource/booking2-1.jpg" alt="Image"/></figure>                          
                          <a onClick={() => setOpen(true)} className="play-btn"><div className="icon-triangle fas fa-caret-right"></div></a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                    <div className="row">
      
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="booking-form style-two">
                            <form method="get" action="#">
                              <div className="row">
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="Start Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="End Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="text" name="name" placeholder="Complete Name" required/>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="email" name="email" placeholder="Email Address" required/>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="tel" name="phone" placeholder="Phone No" required/>
                                    <i className="icon fal fa-mobile"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <button type="submit" className="theme-btn btn-style-one dark-line-two hover-light"><span className="btn-title">Find a Taxi</span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
      
                      <div className="video-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <figure className="image"><img src="/images/resource/booking2-1.jpg" alt="Image"/></figure>
                          <a onClick={() => setOpen(true)} className="play-btn"><div className="icon-triangle fas fa-caret-right"></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
                    <div className="row">
      
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="booking-form style-two">
                            <form method="get" action="#">
                              <div className="row">
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="Start Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="End Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="text" name="name" placeholder="Complete Name" required/>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="email" name="email" placeholder="Email Address" required/>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="tel" name="phone" placeholder="Phone No" required/>
                                    <i className="icon fal fa-mobile"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <button type="submit" className="theme-btn btn-style-one dark-line-two hover-light"><span className="btn-title">Find a Taxi</span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
      
                      <div className="video-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <figure className="image"><img src="/images/resource/booking2-1.jpg" alt="Image"/></figure>
                          <a onClick={() => setOpen(true)} className="play-btn"><div className="icon-triangle fas fa-caret-right"></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className={activeIndex === 5 ? "tab active-tab" : "tab"}>
                    <div className="row">
      

                      <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <div className="booking-form style-two">
                            <form method="get" action="#">
                              <div className="row">
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="Start Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="text" name="destination" placeholder="End Destination" required/>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="text" name="name" placeholder="Complete Name" required/>
                                </div>
      
                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                  <input type="email" name="email" placeholder="Email Address" required/>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <div className="input-outer">
                                    <input type="tel" name="phone" placeholder="Phone No" required/>
                                    <i className="icon fal fa-mobile"></i>
                                  </div>
                                </div>
      
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                  <button type="submit" className="theme-btn btn-style-one dark-line-two hover-light"><span className="btn-title">Find a Taxi</span></button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
      
                      <div className="video-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                          <figure className="image"><img src="/images/resource/booking2-1.jpg" alt="Image"/></figure>
                          <a onClick={() => setOpen(true)} className="play-btn"><div className="icon-triangle fas fa-caret-right"></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default TabBooking
