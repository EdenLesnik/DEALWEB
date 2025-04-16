import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const About1 = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          <div className="row">

            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">ברוכים הבאים לחברתנו</span>
                  <h2 className="letters-slide-up text-split">תרגיש את ההבדל והירגע!</h2>
                  <div className="text">
                    אנחנו מתמודדים בהצלחה עם משימות ברמות קושי שונות, מספקים אחריות לטווח ארוך ולומדים טכנולוגיות חדשות באופן שוטף. בתיק העבודות שלנו עשרות פרויקטים מוצלחים של מבנים בגדלים שונים.
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>אנחנו מתמודדים בהצלחה עם משימות מורכבות.</li>
                  <li>מספקים אחריות לטווח ארוך ולומדים בהתמדה.</li>
                  <li>משלבים טכנולוגיות חדשות ומתקדמות.</li>
                </ul>
                <div className="bottom-box">

                  <div className="author-box">
                    <div className="author-image">
                      <img src="/images/resource/about1-thumb1.jpg" alt="Image" />
                    </div>
                    <div className="author-info " style={{marginRight: '20px'}}>
                      <h6 className="name">עדן לסניק</h6>
                      <span className="designation">מנכ"ל</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <img src="/images/resource/about1-1.jpg" alt="Image" />
                </figure>
                <figure className="image-2">
                  <img src="/images/resource/about1-2.jpg" alt="Image" />
                </figure>
                <div className="video-box">
                  <figure className="image">
                    <img src="/images/resource/about1-3.jpg" alt="Image" />
                  </figure>
                  <a onClick={() => setOpen(true)} className="play-btn">
                    <div className="icon-triangle fas fa-caret-right"></div>
                  </a>
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
