import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

const About1 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section className="about-section-three" dir="rtl">
        <div className="bg bg-pattern-7"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row">
  
              {/* עמודת תוכן */}
              <div className="content-column col-lg-6 order-lg-2" data-aos="fade-left" style={{ textAlign: 'right' }}>
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">ברוכים הבאים ל-DealTaxi</span>
                    <h2 className="letters-slide-up text-split" style={{marginRight: "8px"}}>
                      שירות מוניות אמין <br />שאפשר לסמוך עליו
                    </h2>
                    <div className="text">
                      אנחנו מתמודדים בהצלחה עם כל סוגי הנסיעות – פשוטות ומורכבות. עם טכנולוגיה מתקדמת, התחייבות לשירות מקצועי, ועשרות אלפי לקוחות מרוצים.
                    </div>
                  </div>
                  <div className="bottom-box">
                    <div className="author-box">
                      <div className="author-image">
                        <img src="/images/resource/about1-thumb1.jpg" alt="Image" />
                      </div>
                      <div className="author-info" style={{marginRight: "10px"}}>
                        <h6 className="name">  עדן לסניק</h6>
                        <span className="designation">  מנכ״ל</span>
                      </div>
                      <div className="sign hide-sm">
                        <img src="/images/resource/sign.png" alt="Signature" />
                      </div>
                    </div>
                    <div className="sign hide-lg">
                      <img src="/images/resource/sign.png" alt="Signature" />
                    </div>
                    <Link href="page-about" className="theme-btn btn-style-one">
                      <span className="btn-title">לגלות עוד</span>
                    </Link>
                  </div>
                </div>
              </div>
  
              {/* עמודת תמונה */}
              <div className="image-column col-lg-6">
                <div className="inner-column">
                  <figure className="image overlay-anim">
                    <img src="/images/resource/about3-1.jpg" alt="Image" />
                  </figure>
                  <div className="video-box" data-aos="fade-up">
                    <figure className="image">
                      <img src="/images/resource/about3-2.jpg" alt="Image" />
                    </figure>
                    <a onClick={() => setOpen(true)} className="play-btn">
                      <div className="icon-triangle fas fa-caret-right"></div>
                    </a>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
        {/* סטטיסטיקות */}
        <div className="fun-fact-two">
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row g-0">
  
                {/* בלוק מספרים */}
                <div className="counter-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box" style={{ textAlign: 'right' }}>
                    <div className="icon-box"><i className="icon flaticon-connected-car"></i></div>
                    <div className="content">
                      <div className="counter-one"><CounterUp count={32002} time={3} /></div>
                      <h4 className="counter-text">רכבים מיוחדים</h4>
                    </div>
                  </div>
                </div>
  
                <div className="counter-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box" style={{ textAlign: 'right' }}>
                    <div className="icon-box two"><i className="icon flaticon-destination"></i></div>
                    <div className="content">
                      <div className="counter-one"><CounterUp count={16008} time={3} /></div>
                      <h4 className="counter-text">נסיעות שבוצעו</h4>
                    </div>
                  </div>
                </div>
  
                <div className="counter-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box" style={{ textAlign: 'right' }}>
                    <div className="icon-box three"><i className="icon flaticon-location"></i></div>
                    <div className="content">
                      <div className="counter-one"><CounterUp count={17068} time={3} /></div>
                      <h4 className="counter-text">לקוחות שהסענו</h4>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </>
  );
  
};
export default About1
