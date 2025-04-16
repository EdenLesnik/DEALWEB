import Link from 'next/link';
const AppSection2 = () => {
  return (
    <>
      <section className="app-section-two" dir="rtl">
        <div
          className="bg bg-image"
          style={{ backgroundImage: 'url(images/background/4.jpg)' }}
        ></div>
        <div className="auto-container">
          <div className="bg-overlay-3"></div>
          <div className="content" style={{ textAlign: 'right' }}>
            <h1 className="title letters-slide-up text-split">
              הורידו את אפליקציית <br />
              <span className="colored">דיל טקסי</span> עכשיו בחינם!
            </h1>
            <div className="text">
              שירותי מוניות חכמים. מהירים. פשוטים. זמינים באפליקציה.
            </div>
            <div className="btn-box">
              <Link href="#" className="image">
                <img src="/images/icons/google-play.png" alt="Google Play" />
              </Link>
              <Link href="#" className="image">
                <img src="/images/icons/app-store.png" alt="App Store" />
              </Link>
            </div>
          </div>
          <div className="icon-car-4 bounce-x" style={{ marginRight: "840px" }}></div>
        </div>
      </section>
    </>
  );
  
};
export default AppSection2
