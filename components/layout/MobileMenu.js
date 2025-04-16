'use client'
import Link from "next/link";
import { useState } from 'react';

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
<ul className="navigation clearfix">
    {/*השאר ריק / התפריט ייטען דרך JavaScript*/}
    <li className="current dropdown"><Link href="/">דף הבית</Link></li>
    <li><Link href="/page-contact">צור קשר</Link></li>
    <li className="dropdown"><Link href="/news-grid">חדשות</Link>
        <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
            <li><Link href="/news-grid">תצוגת חדשות</Link></li>
            <li><Link href="/news-details">פרטי חדשות</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(5)}><i className="" /></div>
    </li>
    <li className="dropdown"><Link href="/page-services">שירותים</Link>
        <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
            <li><Link href="/page-services">תצוגת שירותים</Link></li>
            <li><Link href="/page-service-details">פרטי שירות</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="" /></div>
    </li>
    <li><Link href="/page-about">אודות</Link></li>
    </ul>



        </>
    )
}

/**
 * 
 * 
 * בית שירותים עמודים חדשות צור קשר
 * 
 *     <li><Link href="/page-about">אודות</Link></li>
    <li className="dropdown"><Link href="/page-team">הצוות</Link>
        <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
            <li><Link href="/page-team">תצוגת צוות</Link></li>
            <li><Link href="/page-team-details">פרטי הצוות</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div></li>
    <li className="dropdown"><Link href="/page-services">שירותים</Link>
        <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
            <li><Link href="/page-services">תצוגת שירותים</Link></li>
            <li><Link href="/page-service-details">פרטי שירות</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div></li>
    <li className="dropdown"><Link href="/page-projects">פרויקטים</Link>
        <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
            <li><Link href="/page-projects">תצוגת פרויקטים</Link></li>
            <li><Link href="/page-project-details">פרטי פרויקט</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div></li>
    <li className="dropdown"><Link href="/news-grid">חדשות</Link>
        <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
            <li><Link href="/news-grid">תצוגת חדשות</Link></li>
            <li><Link href="/news-details">פרטי חדשות</Link></li>
        </ul>
        <div className="dropdown-btn" onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div></li>
    <li><Link href="/page-contact">צור קשר</Link></li>
 */