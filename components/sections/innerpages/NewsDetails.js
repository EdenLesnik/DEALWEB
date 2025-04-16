import Link from 'next/link';


const NewsGrid = () => {
  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img src="/images/resource/news-details.jpg" alt="" />
                  <div className="blog-details__date">
                    <span className="day">28</span>
                    <span className="month">אוג</span>
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li><Link href="news-details"><i className="fas fa-user-circle"></i> מנהל</Link></li>
                    <li><Link href="news-details"><i className="fas fa-comments"></i> 02 תגובות</Link></li>
                  </ul>
                  <h3 className="blog-details__title">מספקים את שירותי עיצוב האתרים הטובים ביותר</h3>
                  <p className="blog-details__text-2">זהו טקסט לדוגמה בלבד. לורם איפסום דולור סיט אמט, טקסט דמה המשמש להדמיית תוכן. ניתן להחליף אותו בכל טקסט ממשי.</p>
                  <p className="blog-details__text-2">זהו טקסט לדוגמה בלבד. לורם איפסום דולור סיט אמט, טקסט דמה המשמש להדמיית תוכן. ניתן להחליף אותו בכל טקסט ממשי.</p>
                  <p className="blog-details__text-2">זהו טקסט לדוגמה בלבד. לורם איפסום דולור סיט אמט, טקסט דמה המשמש להדמיית תוכן. ניתן להחליף אותו בכל טקסט ממשי.</p>
                </div>
  
                <div className="blog-details__bottom">
                  <p className="blog-details__tags"> <span>תגיות:</span> <Link href="news-details">עסקים</Link> <Link href="news-details">סוכנות</Link> </p>
                  <div className="blog-details__social-list">
                    <Link href="news-details"><i className="fab fa-twitter"></i></Link>
                    <Link href="news-details"><i className="fab fa-facebook"></i></Link>
                    <Link href="news-details"><i className="fab fa-pinterest-p"></i></Link>
                    <Link href="news-details"><i className="fab fa-instagram"></i></Link>
                  </div>
                </div>
  
                <div className="nav-links">
                  <div className="prev">
                    <Link href="news-details" rel="prev">פתרונות מנצחים במצבי הישרדות</Link>
                  </div>
                  <div className="next">
                    <Link href="news-details" rel="next">איך לנהל חיים בריאים ומאוזנים</Link>
                  </div>
                </div>
  
                <div className="comment-one">
                  <h3 className="comment-one__title">2 תגובות</h3>
  
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src="/images/resource/testi-2.png" alt="" />
                    </div>
                    <div className="comment-one__content">
                      <h3>קווין מרטין</h3>
                      <p>זהו טקסט לדוגמה בלבד. לורם איפסום דולור סיט אמט. ניתן להחליף אותו בטקסט אמיתי.</p>
                      <Link href="news-details" className="theme-btn btn-style-one comment-one__btn"><span className="btn-title">השב</span></Link>
                    </div>
                  </div>
  
                  <div className="comment-one__single">
                    <div className="comment-one__image">
                      <img src="/images/resource/testi-1.png" alt="" />
                    </div>
                    <div className="comment-one__content">
                      <h3>שרה אלברט</h3>
                      <p>זהו טקסט לדוגמה בלבד. לורם איפסום דולור סיט אמט. ניתן להחליף אותו בטקסט אמיתי.</p>
                      <Link href="news-details" className="theme-btn btn-style-one comment-one__btn"><span className="btn-title">השב</span></Link>
                    </div>
                  </div>
  
                  <div className="comment-form">
                    <h3 className="comment-form__title">השאר תגובה</h3>
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
                      <div className="mb-3">
                        <textarea name="form_message" className="form-control required" rows="5" placeholder="כתוב את ההודעה שלך"></textarea>
                      </div>
                      <div className="mb-3">
                        <input name="form_botcheck" className="form-control" type="hidden" value="" />
                        <button type="submit" className="theme-btn btn-style-one" data-loading-text="אנא המתן...">
                          <span className="btn-title">שלח תגובה</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
  
            {/* סיידבר */}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
  
                <div className="sidebar__single sidebar__search">
                  <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="חפש כאן..." />
                    <button type="submit"><i className="lnr-icon-search"></i></button>
                  </form>
                </div>
  
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">פוסטים אחרונים</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image"><img src="/images/resource/news-1.jpg" alt="" /></div>
                      <div className="sidebar__post-content">
                        <h3><span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>מנהל</span> <Link href="news-details">משפיעני קריפטו מובילים</Link></h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"><img src="/images/resource/news-2.jpg" alt="" /></div>
                      <div className="sidebar__post-content">
                        <h3><span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>מנהל</span> <Link href="news-details">צורך יכול להוביל לבית משפט וירטואלי</Link></h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"><img src="/images/resource/news-3.jpg" alt="" /></div>
                      <div className="sidebar__post-content">
                        <h3><span className="sidebar__post-content-meta"><i className="fas fa-user-circle"></i>מנהל</span> <Link href="news-details">מה חשוב לדעת על תוכנית עסקית</Link></h3>
                      </div>
                    </li>
                  </ul>
                </div>
  
                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">קטגוריות</h3>
                  <ul className="sidebar__category-list list-unstyled">
                    <li><Link href="news-details">עסקים<span className="icon-right-arrow"></span></Link></li>
                    <li className="active"><Link href="news-details">סוכנות דיגיטלית<span className="icon-right-arrow"></span></Link></li>
                    <li><Link href="news-details">מבואות<span className="icon-right-arrow"></span></Link></li>
                    <li><Link href="news-details">טכנולוגיות חדשות<span className="icon-right-arrow"></span></Link></li>
                    <li><Link href="news-details">אפקטים של פרלקסה<span className="icon-right-arrow"></span></Link></li>
                    <li><Link href="news-details">פיתוח אתרים<span className="icon-right-arrow"></span></Link></li>
                  </ul>
                </div>
  
                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">תגיות</h3>
                  <div className="sidebar__tags-list">
                    <Link href="#">ייעוץ</Link>
                    <Link href="#">סוכנות</Link>
                    <Link href="#">עסקים</Link>
                    <Link href="#">דיגיטל</Link>
                    <Link href="#">חוויית משתמש</Link>
                    <Link href="#">טכנולוגיה</Link>
                  </div>
                </div>
  
                <div className="sidebar__single sidebar__comments">
                  <h3 className="sidebar__title">תגובות אחרונות</h3>
                  <ul className="sidebar__comments-list list-unstyled">
                    <li>
                      <div className="sidebar__comments-icon"><i className="fas fa-comments"></i></div>
                      <div className="sidebar__comments-text-box">
                        <p>מגיב וורדפרס על <br />השקת אפליקציית מובייל</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"><i className="fas fa-comments"></i></div>
                      <div className="sidebar__comments-text-box">
                        <p><span>ג'ון דו</span> על התבנית:</p>
                        <h5>תגובות</h5>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"><i className="fas fa-comments"></i></div>
                      <div className="sidebar__comments-text-box">
                        <p>מגיב וורדפרס על <br />השקת אפליקציית מובייל</p>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__comments-icon"><i className="fas fa-comments"></i></div>
                      <div className="sidebar__comments-text-box">
                        <p><span>ג'ון דו</span> על התבנית:</p>
                        <h5>תגובות</h5>
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
export default NewsGrid
