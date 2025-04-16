import Link from "next/link";

const TeamGrid = () => {

  return (
    <>
    
  <section className="team-section">
    <div className="auto-container">
      <div className="row"> 
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Tricia Gibney</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-1.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Thomas Walker</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-2.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Roman Morko</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-3.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Tricia Gibney</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-4.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Thomas Walker</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-5.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="inner-box">
            <div className="content">
              <h4 className="name"><Link href="page-team-details">Roman Morko</Link></h4>
              <div className="designation">President, Manager</div>
              {/* Info Btn */} 
              <Link href="tel:380503184707" className="info-btn"> <i className="icon fal fa-mobile"></i> <strong>(+380) 50 318 47 07</strong> </Link>
            </div>
            <figure className="image"><img src="/images/resource/team1-6.jpg" alt="Image"/></figure>
            <ul className="social-icon-two">
              <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default TeamGrid
