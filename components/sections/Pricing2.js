import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
        }
    };
const Pricing2 = () => {
    return (
        <>
        <section className="pricing-section-two pt-0">
          <div className="auto-container">
            <div className="sec-title">
              <div className="sectitle-title-box">
                <span className="sub-title">Taxi booking form</span>
                <h2 className="letters-slide-up text-split">Choose Taxi to Ride!</h2>
              </div>
              <div className="text">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies.</div>
            </div>
            <div className="outer-box">
        <Swiper {...swiperOptions} className="pricing-carousel owl-carousel owl-theme default-dots">
            {/* Pricing Block */}
            <SwiperSlide>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-taxi"><img src="/images/resource/price2-1.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content">
                      <h4 className="title"><Link href="page-taxi">BMW X5 2008</Link></h4>
                      <div className="city">Chicago</div>
                      <div className="price">$4.20<small>/km</small></div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            {/* Pricing Block */}
            <SwiperSlide>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-taxi.html"><img src="/images/resource/price2-2.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content">
                      <h4 className="title"><Link href="page-taxi.html">BMW X5 2008</Link></h4>
                      <div className="city">Chicago</div>
                      <div className="price">$4.20<small>/km</small></div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            {/* Pricing Block */}
            <SwiperSlide>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-taxi.html"><img src="/images/resource/price2-3.jpg" alt="Image"/></Link></figure>
                    </div>
                    <div className="content">
                      <h4 className="title"><Link href="page-taxi">BMW X5 2008</Link></h4>
                      <div className="city">Chicago</div>
                      <div className="price">$4.20<small>/km</small></div>
                    </div>
                  </div>
                </div>
            </SwiperSlide>
            {/* Pricing Block */}
            <SwiperSlide>
                <div className="pricing-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><a href="page-taxi.html"><img src="/images/resource/price2-1.jpg" alt="Image"/></a></figure>
                    </div>
                    <div className="content">
                      <h4 className="title"><a href="page-taxi.html">BMW X5 2008</a></h4>
                      <div className="city">Chicago</div>
                      <div className="price">$4.20<small>/km</small></div>
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
export default Pricing2
