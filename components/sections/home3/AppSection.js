import Link from 'next/link';
const AppSection = () => {
  return (
    <>

    <section class="app-section-three">
      <div class="bg bg-image" style={{ backgroundImage: 'url(images/background/5.jpg)' }}></div>
      <div class="auto-container">
        <div class="bg-overlay-5"></div>
        <div class="row">

          {/* Content Column */}
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title light text-center">
                <span class="sub-title">Online Booking</span>
                <h2 class="letters-slide-up text-split">Get the Mobile app and <br/>start your journey!</h2>
              </div>
              <div class="blocks-outer-box">
                
                {/* App Block */}
                <div class="app-block">
                  <div class="inner-box">
                    <i class="icon flaticon-search"></i>
                    <div class="content">
                      <h4 class="title">Easy to search Ridek Taxi!</h4>
                    </div>
                  </div>
                </div>
                
                {/* App Block */}
                <div class="app-block style-two">
                  <div class="inner-box">
                    <i class="icon flaticon-clock"></i>
                    <div class="content">
                      <h4 class="title">Quick Pickups To Save Time!</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-box">
                <Link href="#" class="image"><img src="/images/icons/google-play.png" alt="Image"/></Link>
                <Link href="#" class="image"><img src="/images/icons/app-store.png" alt="Image"/></Link>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <figure class="image bounce-y"><img src="/images/resource/app3-3.png" alt="image"/></figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default AppSection
