import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  navigation: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true
};
const Slider = () => {
  return (
    <>
      <section className="main-slider">
        <div className="outer-box">
          <Swiper {...swiperOptions}>
            <SwiperSlide className="slide-item">
              <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
              <div class="auto-container">
                <h1 className="title">הזמינו מונית <br className="d-none d-md-block" />מכל מקום עוד היום!</h1>
                <div className="text">כל מה שעסק המוניות שלכם צריך – כבר כאן!</div>
                <Link href="page-taxi" className="theme-btn btn-style-one dark-line">
                  <span className="btn-title">מצא מונית</span>
                </Link>
              </div>
            </SwiperSlide>
  
            <SwiperSlide className="slide-item">
              <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
              <div class="auto-container">
                <h1 className="title">הזמינו מונית <br className="d-none d-md-block" />מכל מקום עוד היום!</h1>
                <div className="text">כל מה שעסק המוניות שלכם צריך – כבר כאן!</div>
                <Link href="page-taxi" className="theme-btn btn-style-one dark-line">
                  <span className="btn-title">מצא מונית</span>
                </Link>
              </div>
            </SwiperSlide>
  
            <SwiperSlide className="slide-item">
              <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}></div>
              <div class="auto-container">
                <h1 className="title">הזמינו מונית <br className="d-none d-md-block" />מכל מקום עוד היום!</h1>
                <div className="text">כל מה שעסק המוניות שלכם צריך – כבר כאן!</div>
                <Link href="page-taxi" className="theme-btn btn-style-one dark-line">
                  <span className="btn-title">מצא מונית</span>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
  
};
export default Slider