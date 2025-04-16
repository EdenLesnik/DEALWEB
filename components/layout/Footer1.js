import Link from "next/link"

export default function Footer1() {
    return (
        <>
          <footer className="main-footer footer-style-two">
            <div className="bg bg-pattern-4"></div>
      
            <div className="footer-top">
              <div className="auto-container">
                <div className="inner-container">
                  <div className="top-left">
                    <div className="logo-box">
                      <div className="logo">
                        <Link href="/">
                          <img src="/images/logo-2.png" alt="Logo" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="top-center">
                    <div className="text">
                      הפשט בקלות משאבים פתוחים דרך ממשק ניהול אחורי, ויזואליזציה של שווקים עסקיים דיגיטליים לפני הפעלה מקבילה.
                    </div>
                  </div>
                  <div className="top-right">
                    <div className="info-btn">
                      <i className="icon fal fa-mobile"></i>
                      <div className="content">
                        <h5 className="title">הזמן מונית</h5>
                        <Link href="#" className="phone-no">
                          5267-214-392
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Widgets Section */}
            <div className="widgets-section">
              <div className="auto-container">
                <div className="row">
                  <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                    <div className="footer-widget about-widget">
                      <h5 className="widget-title">הורד את אפליקציית המובייל</h5>
                      <div className="widget-content">
                        <div className="text">בצע אופטימיזציה חכמה לשירותים חוצי פלטפורמות</div>
                        <div className="btn-box">
                          <Link href="#" className="image">
                            <img src="/images/icons/google-play-2.png" alt="Image" />
                          </Link>
                          <Link href="#" className="image">
                            <img src="/images/icons/app-store-2.png" alt="Image" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">קישורים שימושיים</h4>
                      <div className="widget-content">
                        <ul className="user-links two-column">
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">אודות</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">הזמן מונית</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">הרכבים שלנו</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">ביקורות</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">שירותים</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">חדשות</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">חבילות</Link>
                          </li>
                          <li>
                            <i className="icon fa fa-angle-double-right"></i>{" "}
                            <Link href="#">התחברות</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
      
                  <div className="footer-column col-lg-4 col-md-6 col-sm-12">

                  </div>
                </div>
              </div>
            </div>
      
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="auto-container">
                <div className="inner-container">
                  <div className="copyright-text">
                    © כל הזכויות שמורות ל-DealTaxi
                  </div>
                  <ul className="footer-nav">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i> פייסבוק
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i> טוויטר
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-linkedin"></i> לינקדאין
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}
