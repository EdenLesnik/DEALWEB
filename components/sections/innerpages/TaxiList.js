import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const TaxiList = () => {

  return (
  <>
  <section className="pricing-section">
    <div className="auto-container">
      <div className="bg bg-pattern-5"></div>
      <div className="outer-box">

        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            575: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pricing-carousel"
        >
          <SwiperSlide>
            <div className="pricing-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/pricing1-1.jpg" alt="Image"/></figure>
                  <div className="icon-car"></div>
                </div>
                <div className="content">
                  <div className="car-detail">
                    <h4 className="car-name">BMW X5 2008</h4>
                    <div className="city">Chicago</div>
                  </div>
                  <ul className="feature-list">
                    <li className="colored">Initial-Change <span className="price">$2.50</span></li>
                    <li>Per Mile/KM: <span className="price">$4.20</span></li>
                    <li className="colored">Per Stopped Trafic: <span className="price">$1.50</span></li>
                    <li>Passengers: <span className="price">4 Person</span></li>
                  </ul>
                  <div className="btn-box"> <Link href="page-booking" className="theme-btn btn-style-two hover-light"><span className="btn-title">Book a Taxi</span></Link> </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pricing-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/pricing1-2.jpg" alt="Image"/></figure>
                  <div className="icon-car"></div>
                </div>
                <div className="content">
                  <div className="car-detail">
                    <h4 className="car-name">BMW X5 2008</h4>
                    <div className="city">Chicago</div>
                  </div>
                  <ul className="feature-list">
                    <li className="colored">Initial-Change <span className="price">$2.50</span></li>
                    <li>Per Mile/KM: <span className="price">$4.20</span></li>
                    <li className="colored">Per Stopped Trafic: <span className="price">$1.50</span></li>
                    <li>Passengers: <span className="price">4 Person</span></li>
                  </ul>
                  <div className="btn-box"> <Link href="page-booking" className="theme-btn btn-style-two hover-light"><span className="btn-title">Book a Taxi</span></Link> </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pricing-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/pricing1-3.jpg" alt="Image"/></figure>
                  <div className="icon-car"></div>
                </div>
                <div className="content">
                  <div className="car-detail">
                    <h4 className="car-name">BMW X5 2008</h4>
                    <div className="city">Chicago</div>
                  </div>
                  <ul className="feature-list">
                    <li className="colored">Initial-Change <span className="price">$2.50</span></li>
                    <li>Per Mile/KM: <span className="price">$4.20</span></li>
                    <li className="colored">Per Stopped Trafic: <span className="price">$1.50</span></li>
                    <li>Passengers: <span className="price">4 Person</span></li>
                  </ul>
                  <div className="btn-box"> <Link href="page-booking" className="theme-btn btn-style-two hover-light"><span className="btn-title">Book a Taxi</span></Link> </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pricing-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/pricing1-1.jpg" alt="Image"/></figure>
                  <div className="icon-car"></div>
                </div>
                <div className="content">
                  <div className="car-detail">
                    <h4 className="car-name">BMW X5 2008</h4>
                    <div className="city">Chicago</div>
                  </div>
                  <ul className="feature-list">
                    <li className="colored">Initial-Change <span className="price">$2.50</span></li>
                    <li>Per Mile/KM: <span className="price">$4.20</span></li>
                    <li className="colored">Per Stopped Trafic: <span className="price">$1.50</span></li>
                    <li>Passengers: <span className="price">4 Person</span></li>
                  </ul>
                  <div className="btn-box"> <Link href="page-booking" className="theme-btn btn-style-two hover-light"><span className="btn-title">Book a Taxi</span></Link> </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  </>
  );
};
export default TaxiList
