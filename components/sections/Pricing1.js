import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
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
const Pricing1 = () => {
  return (
    <>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="bg bg-pattern-5"></div>
          <div className="sec-title text-center">
            <span className="sub-icon"></span>
            <span className="sub-title">בחרו את התוכנית שמתאימה לכם</span>
            <h2 className="letters-slide-up text-split">בחרו את המונית שלכם לנסיעה!</h2>
          </div>
          <div className="outer-box">
            <Swiper {...swiperOptions} className="pricing-carousel">
  
              {/* Pricing Block */}
              <SwiperSlide>
                <div className="pricing-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/images/resource/pricing1-1.jpg" alt="Image" /></figure>
                      <div className="icon-car"></div>
                    </div>
                    <div className="content">
                      <div className="car-detail">
                        <h4 className="car-name">BMW X5 2008</h4>
                        <div className="city">שיקגו</div>
                      </div>
                      <ul className="feature-list">
                        <li className="colored">מחיר פתיחה: <span className="price">$2.50</span></li>
                        <li>לכל מייל/ק"מ: <span className="price">$4.20</span></li>
                        <li className="colored">בעת עמידה בפקק: <span className="price">$1.50</span></li>
                        <li>נוסעים: <span className="price">4 אנשים</span></li>
                      </ul>
                      <div className="btn-box">
                        <Link href="page-booking" className="theme-btn btn-style-two hover-light">
                          <span className="btn-title">הזמן מונית</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
              {/* שאר השקפים אותו הדבר עם טקסטים מתורגמים */}
              {/* אני משכפל את הבלוקים רק עם שינוי טקסט - כדי לשמור על אחידות */}
              {[2, 3, 4].map(i => (
                <SwiperSlide key={i}>
                  <div className="pricing-block">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image"><img src={`/images/resource/pricing1-${i > 2 ? 1 : i}.jpg`} alt="Image" /></figure>
                        <div className="icon-car"></div>
                      </div>
                      <div className="content">
                        <div className="car-detail">
                          <h4 className="car-name">BMW X5 2008</h4>
                          <div className="city">שיקגו</div>
                        </div>
                        <ul className="feature-list">
                          <li className="colored">מחיר פתיחה: <span className="price">$2.50</span></li>
                          <li>לכל מייל/ק"מ: <span className="price">$4.20</span></li>
                          <li className="colored">בעת עמידה בפקק: <span className="price">$1.50</span></li>
                          <li>נוסעים: <span className="price">4 אנשים</span></li>
                        </ul>
                        <div className="btn-box">
                          <Link href="page-booking" className="theme-btn btn-style-two hover-light">
                            <span className="btn-title">הזמן מונית</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
  
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
  
};
export default Pricing1
