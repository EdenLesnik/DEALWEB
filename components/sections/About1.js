import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About1 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section className="about-section pt-0">
        <div className="auto-container">
          <div className="row">
  
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">ברוכים הבאים ל-DealTaxi</span>
                  <h2 className="letters-slide-up text-split">תרגישו את ההבדל ותיהנו מהשקט!</h2>
                  <div className="text">
                    אנו מצליחים להתמודד עם משימות בכל רמת מורכבות, מעניקים אחריות לטווח ארוך ומשלבים טכנולוגיות חדשות באופן קבוע. תיק העבודות שלנו כולל עשרות פרויקטים מוצלחים ברחבי הארץ.
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>התמודדות עם נסיעות מורכבות ופשוטות כאחד.</li>
                  <li>התחייבות לאיכות ואחריות לטווח ארוך.</li>
                  <li>שילוב מתמיד של טכנולוגיות חדשות.</li>
                </ul>
                <div className="bottom-box">
  
                  <Link href="tel:5267214392" className="info-btn">
                    <small>התקשרו להזמנת מונית</small>
                    <strong>5267-214-392</strong>
                  </Link>
  
                  <div className="author-box">
                    <div className="author-image">
                      <img src="/images/resource/about1-thumb1.jpg" alt="Image" />
                    </div>
                    <div className="author-info">
                      <h6 className="name">תומר אוחנה</h6>
                      <span className="designation">מייסד - מנכ״ל</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image"><img src="/images/resource/about1-1.jpg" alt="Image" /></figure>
                <figure className="image-2"><img src="/images/resource/about1-2.jpg" alt="Image" /></figure>
                <div className="video-box">
                  <figure className="image"><img src="/images/resource/about1-3.jpg" alt="Image" /></figure>
                  <a onClick={() => setOpen(true)} className="play-btn">
                    <div className="icon-triangle fas fa-caret-right"></div>
                  </a>
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
export default About1
