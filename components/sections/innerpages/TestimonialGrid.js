import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true
};
const TestimonialGrid = () => {

  return (
    <>
    
      <section className="testimonial-section-two">
        <div className="auto-container">
          <div className="sec-title mb-0">
            <span className="sub-title">Testimonials</span>
            <h2 className="letters-slide-up text-split">Client's Reviews</h2>
          </div>
          <Swiper {...swiperOptions} className="testimonial-carousel">
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="/images/resource/testi2-1.jpg" alt="Image"/></figure>
                    <figure className="image two overlay-anim"><img src="/images/resource/testi2-2.jpg" alt="Image"/></figure>
                    <i className="icon-quote"></i>
                  </div>
                  <div className="content">
                    <div className="text">“Continually actualize alternative through visionary materials. without total linkage. Rapidiously just in time strategic theme areas whereas communities scalable supply chains impact functionalized.</div>
                    <div className="author-box">
                      <div className="author-info">
                        <h4 className="name">Marko Marlee</h4>
                        <div className="rating-box">
                          <span className="designation">Director at Taxiroom</span>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
      
            <SwiperSlide>
              <div className="testimonial-block-two">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="/images/resource/testi2-1.jpg" alt="Image"/></figure>
                    <figure className="image two overlay-anim"><img src="/images/resource/testi2-2.jpg" alt="Image"/></figure>
                    <i className="icon-quote"></i>
                  </div>
                  <div className="content">
                    <div className="text">“Continually actualize alternative through visionary materials. without total linkage. Rapidiously just in time strategic theme areas whereas communities scalable supply chains impact functionalized.</div>
                    <div className="author-box">
                      <div className="author-info">
                        <h4 className="name">Marko Marlee</h4>
                        <div className="rating-box">
                          <span className="designation">Director at Taxiroom</span>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </>
  );
};
export default TestimonialGrid