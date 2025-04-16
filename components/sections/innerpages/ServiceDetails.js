import Link from "next/link";
import { useState } from "react";

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
    
    <section className="services-details">
  <div className="container">
    <div className="row">

      {/* תפריט צד של שירותים */}
      <div className="col-xl-4 col-lg-4">
        <div className="service-sidebar">

          <div className="sidebar-widget service-sidebar-single">
            <div className="sidebar-service-list">
              <ul>
                <li><Link href="page-service-details" className="current"><i className="fas fa-angle-right"></i><span>שירותים גמישים</span></Link></li>
                <li className="current"><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>מונית לשדה תעופה</span></Link></li>
                <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>נסיעת הלוך-חזור</span></Link></li>
                <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>מונית עירונית</span></Link></li>
                <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>מונית משולבת</span></Link></li>
                <li><Link href="page-service-details"><i className="fas fa-angle-right"></i><span>נסיעות אלגנטיות</span></Link></li>
              </ul>
            </div>

            <div className="service-details-help">
              <div className="help-shape-1"></div>
              <div className="help-shape-2"></div>
              <h2 className="help-title">צרו קשר <br /> איתנו לכל <br /> ייעוץ</h2>
              <div className="help-icon">
                <span className="lnr-icon-phone-handset"></span>
              </div>
              <div className="help-contact">
                <p>זקוקים לעזרה? דברו עם מומחה</p>
                <Link href="tel:12463330079">+892 (123) 112 - 9999</Link>
              </div>
            </div>

            <div className="sidebar-widget service-sidebar-single mt-4">
              <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                <Link href="#" className="theme-btn btn-style-one d-grid">
                  <span className="btn-title"><span className="fas fa-file-pdf"></span> הורדת קובץ PDF</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* תוכן ראשי של השירות */}
      <div className="col-xl-8 col-lg-8">
        <div className="services-details__content">
          <img src="/images/resource/service-details.jpg" alt="" />
          <h3 className="mt-4">סקירת השירות</h3>
          <p>זהו טקסט דמה בלבד המשמש להדמיה. ניתן להחליף את התוכן הזה בתיאור אמיתי של השירות, כולל מידע מקצועי, יתרונות, ומה כולל השירות בפועל.</p>
          <p>התוכן הזה נועד לשמש כדוגמה בלבד. נא להכניס כאן את פרטי השירות שאתם מציעים, כולל מידע שיווקי או טכני לפי הצורך.</p>

          <div className="content mt-40">
            <div className="text">
              <h3>מרכז שירות</h3>
              <p>כאן תוכלו לפרט על מיקום המרכזים, שעות פעילות, שירותים נלווים וכדומה.</p>
              <blockquote className="blockquote-one">
                משפט בולט או ציטוט חשוב שקשור לשירות – יכול להיות המלצה של לקוח או סלוגן.
              </blockquote>
            </div>

            <div className="feature-list mt-4">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <img className="mb-3" src="/images/resource/service-d1.jpg" alt="images" />
                  <p>תיאור קצר של יתרון או תכונה מיוחדת של השירות עם תמונה תואמת.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <img className="mb-3" src="/images/resource/service-d2.jpg" alt="images" />
                  <p>פסקה נוספת עם תוכן תיאורי על אלמנט נוסף בשירות או בתהליך.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-25">
            <h3>שאלות נפוצות</h3>
            <p>כאן ניתן לרכז את כל השאלות שהלקוחות שואלים לרוב לגבי השירותים.</p>
            <ul className="accordion-box wow fadeInRight">

              <li className="accordion block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  האם מותר להשתמש בטכנולוגיה שלי בפלטפורמה?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">ישנם גרסאות רבות, אך רק חלק מהן מתאימות לפי תנאי השימוש בפלטפורמה.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  איך לבצע השקה שקטה לעסק שלי?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">השקה שקטה כוללת בדיקות עם קהל קטן, שיפור מתמיד והגשת גרסה ראשונית.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  איך להפוך מבקרים לתורמים קבועים?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">יש לבנות אמון עם המשתמש, להציע ערך ממשי ולעודד מעורבות אישית.</div>
                  </div>
                </div>
              </li>

              <li className="accordion block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  איך אני יכול למצוא את הפתרונות שלי?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">באמצעות עיון במאמרי עזרה, יצירת קשר עם צוות התמיכה והשתתפות בקהילות.</div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
};
export default ServiceDetails
