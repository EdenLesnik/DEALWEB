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
const Service = () => {
  return (
    <>
      <section className="service-section-three" dir="rtl">
        <div className="auto-container">
          <div className="sec-title text-center" style={{ textAlign: 'right' }}>
            <span className="sub-icon"></span>
            <span className="sub-title">השירותים שלנו</span>
            <h2 className="letters-slide-up text-split">השירותים המובילים שלנו בשבילך</h2>
          </div>
          <div className="outer-box">
            <Swiper {...swiperOptions} className="service-carousel">
  
              {/* שירות רגיל */}
              <SwiperSlide>
                <div className="service-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/service3-1.jpg" alt="Image" /></figure>
                      <i className="icon flaticon-taxi-2"></i>
                    </div>
                    <div className="content" style={{ textAlign: 'right' }}>
                      <h3 className="title"><Link href="page-services-details">נסיעות יומיומיות</Link></h3>
                      <div className="text">מוניות זמינות לנסיעות יום־יומיות בעיר ובסביבה בצורה נוחה ומהירה.</div>
                      <Link href="page-services-details" className="icon fa fa-angle-double-right"></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
              {/* שירות עסקי */}
              <SwiperSlide>
                <div className="service-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/service3-2.jpg" alt="Image" /></figure>
                      <i className="icon flaticon-mobile-app"></i>
                    </div>
                    <div className="content" style={{ textAlign: 'right' }}>
                      <h3 className="title"><Link href="page-services-details">הסעות לעסקים</Link></h3>
                      <div className="text">שירות מקצועי, מדויק ואיכותי לנסיעות לעובדים, פגישות ואירועים עסקיים.</div>
                      <Link href="page-services-details" className="icon fa fa-angle-double-right"></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
              {/* שירות תיירותי */}
              <SwiperSlide>
                <div className="service-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/service3-3.jpg" alt="Image" /></figure>
                      <i className="icon flaticon-driver-3"></i>
                    </div>
                    <div className="content" style={{ textAlign: 'right' }}>
                      <h3 className="title"><Link href="page-services-details">נסיעות תיירות</Link></h3>
                      <div className="text">סיורים באתרים מובילים בישראל עם נהגים מנוסים ומקצועיים.</div>
                      <Link href="page-services-details" className="icon fa fa-angle-double-right"></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
              {/* שכפול נסיעות רגילות */}
              <SwiperSlide>
                <div className="service-block-three">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/service3-1.jpg" alt="Image" /></figure>
                      <i className="icon flaticon-taxi-2"></i>
                    </div>
                    <div className="content" style={{ textAlign: 'right' }}>
                      <h3 className="title"><Link href="page-services-details">נסיעות יומיומיות</Link></h3>
                      <div className="text">מוניות זמינות לנסיעות יום־יומיות בעיר ובסביבה בצורה נוחה ומהירה.</div>
                      <Link href="page-services-details" className="icon fa fa-angle-double-right"></Link>
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
export default Service
