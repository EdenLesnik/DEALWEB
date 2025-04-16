import Link from 'next/link';
const AppSection1 = () => {
  return (
    <>
      <section className="app-section">
        <div className="auto-container">
          <div className="outer-box">
            <div
              className="bg bg-image"
              style={{ backgroundImage: 'url(images/background/3.jpg)' }}
            ></div>
            <div className="icon-car-3 bounce-x"></div>
            <div className="bg-overlay-2"></div>
            <div className="content">
              <h1 className="title letters-slide-up text-split">
                הורידו את אפליקציית <br /> <span className="colored">DealTaxi</span> בחינם
              </h1>
              <div className="text">
                נסיעות נוחות, זמינות מיידית – הכל בלחיצת כפתור!
              </div>
              <div className="btn-box">
                <Link href="#" className="image">
                  <img src="/images/icons/google-play.png" alt="Image" />
                </Link>
                <Link href="#" className="image">
                  <img src="/images/icons/app-store.png" alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSection1
