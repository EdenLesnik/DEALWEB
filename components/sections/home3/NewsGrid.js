import Link from 'next/link';


const NewsGrid = () => {
  return (
    <>
    
    <section class="news-section-three">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="sub-icon"></span>
          <span class="sub-title">News & Updates</span>
          <h2 class="letters-slide-up text-split">Recent Articles</h2>
        </div>
        <div class="row">

          {/* News Block */}
          <div class="news-block-three">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image"><Link href="#"><img src="/images/resource/news3-1.jpg" alt="Image"/></Link></figure>
                <div class="bg-overlay-6"></div>
              </div>
              <div class="content-box">
                <h6 class="sub-title">Taxi Advice</h6>
                <h3 class="title"><Link href="#">How to start initiating an startup in few</Link></h3>
                <div class="text">Lorem ipsum dolor sit amet, cons auctor a liquet. Aenean sollicitudi,bibendu. Lorem ipsum dolor sit amet, cons auct ean sollicitudi,bibendu.</div>
                <div class="author-box">
                  <img src="/images/resource/news1-thumb1.jpg" alt="image"/>
                  <div class="author-info">
                    <div class="date">January 9,2022</div>
                    <h6 class="name">by <span>Jakki James</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Block */}
          <div class="news-block-three style-two">
            <div class="inner-box">
              <div class="image-box order-lg-2">
                <figure class="image"><Link href="#"><img src="/images/resource/news3-2.jpg" alt="Image"/></Link></figure>
                <div class="bg-overlay-6"></div>
              </div>
              <div class="content-box">
                <h6 class="sub-title">Taxi Advice</h6>
                <h3 class="title"><Link href="#">How to start initiating an startup in few</Link></h3>
                <div class="text">Lorem ipsum dolor sit amet, cons auctor a liquet. Aenean sollicitudi,bibendu. Lorem ipsum dolor sit amet, cons auct ean sollicitudi,bibendu.</div>
                <div class="author-box">
                  <img src="/images/resource/news1-thumb1.jpg" alt="image"/>
                  <div class="author-info">
                    <div class="date">January 9,2022</div>
                    <h6 class="name">by <span>Jakki James</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="btn-box text-center">
          <Link href="#" class="theme-btn btn-style-one"><span class="btn-title">View All News</span></Link>
        </div>
      </div>
    </section>

    </>
  );
};
export default NewsGrid
