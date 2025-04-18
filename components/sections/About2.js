import Link from 'next/link';
const About2 = () => {
    return (
        <>
        <section className="about-section-two">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-icon"></span>
              <span className="sub-title">Welcome to Our Company</span>
              <h2 className="letters-slide-up text-split">We Provide Trusted Cab Service <br/>In The World</h2>
            </div>
            <div className="row">

              <div className="content-column col-xl-5 col-lg-6 order-lg-2">
                <div className="inner-column">
                  <h4 className="title">Our Mission</h4>
                  <div className="text">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies. Our portfolio includes dozens of successfully completed projects of houses of different storeys,</div>
                  <h4 className="title two">Our Goals</h4>
                  <ul className="list-style-two">
                    <li>We successfully cope with tasks of varying complexity, </li>
                    <li>Long-term guarantees and regularly</li>
                    <li>Master new technologies.</li>
                  </ul>
                  <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                </div>
              </div>

              <div className="image-column col-xl-7 col-lg-6">
                <div className="inner-column">
                  <figure className="image overlay-anim"><img src="/images/resource/about2-1.jpg" alt="Image"/></figure>
                  <figure className="image-2 overlay-anim"><img src="/images/resource/about2-2.jpg" alt="Image"/></figure>
                  <div className="exp-box bounce-x">
                    <h1 className="count">14<small>+</small></h1>
                    <h4 className="title">Years of Professional <br/>Experience</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About2
