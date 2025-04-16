import Link from "next/link";
import { useMemo } from "react";

const Banner = () => {
  // בוחר סרטון אקראי רק פעם אחת
  const randomVideo = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * 4) + 1; // 1-5
    return `/images/videos/video${randomIndex}.mp4`;
  }, []);

  return (
    <>
      <section className="banner-section-two" dir="rtl">
        <div className="bg-shape"></div>
        <div className="bg-shape-logo"></div>

        <div className="video-wrapper">
          <video autoPlay muted loop playsInline className="banner-video">
            <source src={randomVideo} type="video/mp4" />
          </video>
        </div>

        <div className="auto-container">
          <div className="row">

            {/* עמודת כותרת */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12" style={{ textAlign: 'right' }}>
              <div className="inner-column">
                <h1 className="title"></h1>
              </div>
            </div>

            <div className="icon-car-222 bounce-x"></div>

            <div className="image-column col-lg-12 col-md-12 col-sm-12" style={{ textAlign: 'right' }}>
              <div className="inner-column">
                <figure className="image"></figure>
                
                                <h4 className="title">
                  להזמין מוניות זה פשוט ומשתלם{" "}
                  
                </h4>
              </div>
              <div className="download-banner">
              <Link href="#" className="image"><img src="/images/icons/google-play-2.png" alt="Image"/></Link>
              <Link href="#" className="image"><img src="/images/icons/app-store-2.png" alt="Image"/></Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
