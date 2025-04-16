import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style-three ${isSearch ? "moblie-search-active" : ""}`}>
    {/* Header Top */}
    <div className="header-top">
      <div className="auto-container">
        <div className="inner-container">
          <div className="top-left"> 
            {/* Info List */}
            <ul className="list-style-one">
              <li><i className="fal fa-mobile"></i> <Link href="tel:0123456789">+92 8475 904950</Link></li>
              <li><i className="fal fa-envelope"></i> <Link href="mailto:info@anobtaxi.com" >info@anob-taxi.com</Link></li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="social-icon-one">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
              <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Header lower */}
    <div className="header-lower">
      <div className="auto-container"> 
        <div className="main-box">
          <div className="logo-box">
            <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="Logo" /></Link></div>
          </div>
          <div className="nav-outer">
            <nav className="nav main-menu">
              <Menu />
            </nav>
          </div>
          <div className="outer-box"> 
            <button className="ui-btn search-btn" onClick={handleSearch}> <span className="icon lnr lnr-icon-search"></span> </button>
            <div className="btn-box"> <Link href="page-booking" className="theme-btn btn-style-one"><span className="btn-title">Book a Taxi</span></Link> </div>
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
    <div className="menu-backdrop" onClick={handleMobileMenu} />
    {/*התפריט ייטען אוטומטית דרך JavaScript / זהה לתפריט שבכותרת העליונה*/}
    <nav className="menu-box">
        <div className="upper-box">
            <div className="nav-logo"><Link href="/"><img src="/images/logo-2.png" alt="" /></Link></div>
            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
        </div>
        <MobileMenu />
        <ul className="contact-list-one light">
            <li>
                {/* תיבת מידע ליצירת קשר */}
                <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset" />
                    <span className="title">התקשר עכשיו</span>
                    <div className="text">
                        <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                    </div>
                </div>
            </li>
            <li>
                {/* תיבת מידע ליצירת קשר */}
                <div className="contact-info-box">
                    <span className="icon lnr-icon-envelope1" />
                    <span className="title">שלח מייל</span>
                    <div className="text">                                    
                        <Link href="/mailto:help@company.com">help@company.com</Link>
                    </div>
                </div>
            </li>
            <li>
                {/* תיבת מידע ליצירת קשר */}
                <div className="contact-info-box">
                    <span className="icon lnr-icon-clock" />
                    <span className="title">שעות פעילות</span>
                    <div className="text">                                    
                        שני - שבת 8:00 - 18:30, ראשון - סגור
                    </div>
                </div>
            </li>
        </ul>
        <ul className="social-links">
            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
        </ul>
    </nav>
</div>
{/* End Mobile Menu */}
    {/* Header Search */}
    <div className="search-popup">
      <span className="search-back-drop" onClick={handleSearch} />
      <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
      <div className="search-inner">
        <form method="post" action="/">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search..." required />
            <button type="submit"><i className="fa fa-search" /></button>
          </div>
        </form>
      </div>
    </div>
    {/* End Header Search */}
    {/* Sticky Header  */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="auto-container">
        <div className="inner-container">
          {/*Logo*/}
          <div className="logo">
            <Link href="/" ><img src="/images/logo.png" alt=""  /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-outer">
            {/* Main Menu */}
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

  </>
  )
}
