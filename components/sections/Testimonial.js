import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  loop: true
};
const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="bg bg-pattern-2"></div>
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">מה הלקוחות אומרים</span>
            <h2 className="letters-slide-up text-split">חוות דעת מלקוחות</h2>
          </div>
          <Swiper {...swiperOptions} className="testimonial-carousel">
  
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="image"><img src="/images/resource/testi1-1.jpg" alt="Image" /></figure>
                  <div className="content">
                    <div className="text">
                      “שירות פשוט מעולה! הנהג הגיע מהר, הרכב היה נקי והמחיר הוגן. מאז אני מזמין רק דרך DealTaxi.”
                    </div>
                    <div className="author-box">
                      <i className="icon fal fa-quote-right"></i>
                      <div className="author-info">
                        <h4 className="name">מרקו מרלי</h4>
                        <span className="designation">מנהל ב-Taxiroom</span>
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
            </SwiperSlide>
  
            <SwiperSlide>
              <div className="testimonial-block">
                <div className="inner-box">
                  <figure className="image"><img src="/images/resource/testi1-1.jpg" alt="Image" /></figure>
                  <div className="content">
                    <div className="text">
                      “האפליקציה נוחה מאוד לשימוש, קל להזמין מונית והתגובה מהירה. ממליץ בחום!”
                    </div>
                    <div className="author-box">
                      <i className="icon fal fa-quote-right"></i>
                      <div className="author-info">
                        <h4 className="name">מרקו מרלי</h4>
                        <span className="designation">מנהל ב-Taxiroom</span>
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
            </SwiperSlide>
  
          </Swiper>
        </div>
      </section>
    </>
  );
  
};
export default Testimonial
