import Link from "next/link"

export default function Menu() {

  return (
    <>
      <ul className="navigation" dir="rtl">
  
      <li><Link href="/page-contact">צור קשר</Link></li>
      <li className="dropdown">
          <Link href="/news-grid">חדשות</Link>
          <ul>
            <li><Link href="/news-grid">תצוגת חדשות</Link></li>
            <li><Link href="/news-details">פרטי כתבה</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/page-about">פרטים</Link>
          <ul>
            <li><Link href="/page-about">אודות</Link></li>
            <li><Link href="/page-faq">שאלות נפוצות</Link></li>
          </ul>
        </li>
  
        <li className="dropdown">
          <Link href="/page-services">שירותים</Link>
          <ul>
            <li><Link href="/page-services">רשימת שירותים</Link></li>
            <li><Link href="/page-service-details">פרטי שירות</Link></li>
          </ul>
        </li>
  

  

        <li className="current dropdown">
          <a href="/">בית</a>

        </li>
      </ul>
    </>
  );
  
}
/**
 * 
 * 
 *  
 *            <li><Link href="/page-taxi-list">רשימת מוניות</Link></li>
            <li className="dropdown">
              <Link href="/page-team">נהגים</Link>
              <ul>
                <li><Link href="/page-team">תצוגת נהגים</Link></li>
                <li><Link href="/page-team-details">פרטי נהג</Link></li>
              </ul>
            </li>
            <li><Link href="/page-testimonial">חוות דעת</Link></li>
            <li><Link href="/page-pricing">מחירים</Link></li>
            <li><Link href="/page-faq">שאלות נפוצות</Link></li>
            <li><Link href="/page-error">404</Link></li>
 */