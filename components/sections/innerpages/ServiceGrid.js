import Link from 'next/link';


const ServiceGrid = () => {
  return (
    <>
    
    <section className="service-section-three">
  <div className="auto-container">
    <div className="row" data-aos="fade-left">
      
      {/* שירות רגיל */}
      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-1.jpg" alt="נסיעה רגילה" /></figure>
              <i className="icon flaticon-taxi-2"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">נסיעות רגילות</Link></h3>
              <div className="text">הזמן מונית בלחיצת כפתור והגיע ליעד במהירות, בנוחות ובמחיר נוח. זמינות גבוהה בכל רגע נתון.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

      {/* שירות לעסקים */}
      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-2.jpg" alt="שירות לעסקים" /></figure>
              <i className="icon flaticon-mobile-app"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">שירות לעסקים</Link></h3>
              <div className="text">פתרונות תחבורה מתקדמים לארגונים, כולל חשבוניות חודשיות, ניהול עובדים ודוחות מותאמים.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

      {/* שירות תיירותי */}
      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-3.jpg" alt="שירות לתיירים" /></figure>
              <i className="icon flaticon-driver-3"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">נסיעות תיירות ונופש</Link></h3>
              <div className="text">סיורים מודרכים ונסיעות לכל מוקדי התיירות בארץ – ליחידים, זוגות וקבוצות. עם נהגים אדיבים ומנוסים.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

      {/* כפילויות – שמתי שוב את אותם שירותים עם תיאורים משתנים מעט */}
      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-1.jpg" alt="הסעות מהירות" /></figure>
              <i className="icon flaticon-taxi-2"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">הסעות מהירות</Link></h3>
              <div className="text">בחר מונית, עקוב אחריה בזמן אמת, וצא לדרך בלי עיכובים – DealTaxi דואגת שתגיע בזמן.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-2.jpg" alt="מוניות VIP" /></figure>
              <i className="icon flaticon-mobile-app"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">מוניות VIP</Link></h3>
              <div className="text">מוניות יוקרה, נהגים מקצועיים ודיסקרטיות מלאה – חוויית נסיעה מותאמת אישית לכל לקוח.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="service-block-three">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><img src="/images/resource/service3-3.jpg" alt="שירות אישי" /></figure>
              <i className="icon flaticon-driver-3"></i>
            </div>
            <div className="content">
              <h3 className="title"><Link href="page-service-details">שירות אישי ללקוח</Link></h3>
              <div className="text">אנחנו לא עוד אפליקציית מוניות – אצלנו אתה לקוח קבוע עם שם, לא רק יעד. שירות עם נשמה.</div>
              <Link href="page-service-details" className="icon fa fa-angle-double-right"></Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
};
export default ServiceGrid
