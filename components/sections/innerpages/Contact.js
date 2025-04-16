import Link from 'next/link';
const Contact = () => {
  return (
    <>
      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">שלח לנו אימייל</span>
                <h2>אל תהסס לכתוב לנו</h2>
              </div>
  
              {/* טופס יצירת קשר */}
              <form id="contact_form" name="contact_form" className="" action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="הכנס שם" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="הכנס אימייל" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="נושא הפנייה" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="מספר טלפון" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows="7" placeholder="כתוב את ההודעה שלך כאן"></textarea>
                </div>
                <div className="mb-5">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="theme-btn btn-style-one me-2 mb-3 mb-sm-0" data-loading-text="אנא המתן...">
                    <span className="btn-title">שלח הודעה</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one bg-theme-color5">
                    <span className="btn-title">איפוס</span>
                  </button>
                </div>
              </form>
            </div>
  
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">צריך עזרה?</span>
                  <h2>צור איתנו קשר</h2>
                  <div className="text">
                    לורם איפסום הוא טקסט דמה חופשי המשמש לתוכן באתרים. טקסט לדוגמה עבור תיאור כללי בלבד.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>שאלה כלשהי?</h4>
                      <Link href="tel:980089850">
                        <span>חינם</span> +92 (020)-9850
                      </Link>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>שלח אימייל</h4>
                      <Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center">
                    <div className="icon">
                      <span className="lnr-icon-location"></span>
                    </div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h4>ניתן לבקר בכל עת</h4>
                      <span>66 רחוב גולדן, ברוקלין, ניו יורק</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
          </div>
        </div>
      </section>
  
      {/* מקטע מפה */}
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </section>
    </>
  );
  
};
export default Contact
