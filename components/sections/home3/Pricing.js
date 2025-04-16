import Link from "next/link";

const Pricing = () => {
  return (
    <>
  <section class="pricing-section-three">
    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="sub-icon"></span>
        <span class="sub-title">Taxi rate for you</span>
        <h2 class="letters-slide-up text-split">Taxi Pricing Plans</h2>
      </div>
      <div class="row">
        
        {/* Pricing Block */}
        <div class="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box">
            <div class="title-box">
              <h6 class="title">Student Package</h6>
              <div class="price">$250 <sub>/mo</sub></div>
              <i class="icon flaticon-price-tag"></i>
            </div>
            <div class="content">
              <ul class="feature-list">
                <li><i class="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i class="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i class="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i class="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div class="btn-box">
                <Link href="page-pricing" class="theme-btn btn-style-three"><span class="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Block */}
        <div class="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box">
            <div class="title-box">
              <h6 class="title">Medical Package</h6>
              <div class="price">$410 <sub>/mo</sub></div>
              <i class="icon flaticon-price-tag"></i>
            </div>
            <div class="content">
              <ul class="feature-list">
                <li><i class="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i class="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i class="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i class="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div class="btn-box">
                <Link href="page-pricing" class="theme-btn btn-style-three"><span class="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Block */}
        <div class="pricing-block-three col-lg-4 col-md-6 col-sm-12">
          <div class="inner-box">
            <div class="title-box">
              <h6 class="title">Business Package</h6>
              <div class="price">$730 <sub>/mo</sub></div>
              <i class="icon flaticon-price-tag"></i>
            </div>
            <div class="content">
              <ul class="feature-list">
                <li><i class="icon fal fa-check-circle"></i> 02 Passangers</li>
                <li><i class="icon fal fa-check-circle"></i> 5 kms Distance Only</li>
                <li><i class="icon fal fa-check-circle"></i> No Extra Charges</li>
                <li><i class="icon fal fa-check-circle"></i> Free Book No Advance</li>
              </ul>
              <div class="btn-box">
                <Link href="page-pricing" class="theme-btn btn-style-three"><span class="btn-title">Purchase Now</span></Link>
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
