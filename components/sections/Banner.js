import Link from "next/link"
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
const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/1.jpg)' }}></div>
        <div className="image-box">
          <figure className="image"><img src="/images/banner/banner1-1.jpg" alt="Image" /></figure>
        </div>
  
        <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme default-dots">
          <SwiperSlide className="slide-item">
            <div className="icon-car-2 bounce-x"></div>
            <div className="auto-container">
              <div className="content-box">
                <h1 className="title">הזמינו מונית <br />מכל מקום!</h1>
                <div className="text">כל מה שעסק מוניות צריך – כבר כאן!</div>
                <Link href="page-taxi-list" className="theme-btn btn-style-one dark-line-two hover-light">
                  <span className="btn-title">מצא מונית</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide className="slide-item">
            <div className="icon-car-2 bounce-x"></div>
            <div className="auto-container">
              <div className="content-box">
                <h1 className="title">הזמינו מונית <br />מכל מקום!</h1>
                <div className="text">כל מה שעסק מוניות צריך – כבר כאן!</div>
                <Link href="page-taxi-list" className="theme-btn btn-style-one dark-line-two hover-light">
                  <span className="btn-title">מצא מונית</span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
  
};
export default Banner
