import Link from "next/link";

const Pricing = () => {

  return (
    <>
    
  <section className="pricing-section-three">
    <div className="auto-container">
      <div className="row">
        
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Student Package</h6>
              <div className="price">$250 <sub>/mo</sub></div>
              <i className="icon flaticon-price-tag"></i>
            </div>
            <div className="content">
              <ul className="feature-list">
                <li><i className="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i className="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i className="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i className="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-three"><span className="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Medical Package</h6>
              <div className="price">$410 <sub>/mo</sub></div>
              <i className="icon flaticon-price-tag"></i>
            </div>
            <div className="content">
              <ul className="feature-list">
                <li><i className="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i className="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i className="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i className="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-three"><span className="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Block */}
        <div className="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="title-box">
              <h6 className="title">Business Package</h6>
              <div className="price">$730 <sub>/mo</sub></div>
              <i className="icon flaticon-price-tag"></i>
            </div>
            <div className="content">
              <ul className="feature-list">
                <li><i className="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i className="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i className="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i className="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-three"><span className="btn-title">Purchase Now</span></Link>
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
export default Pricing
