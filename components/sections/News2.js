import Link from 'next/link';

const News2 = () => {  
  const data = [
  {
      img: "news2-1.jpg",
      title:"How to start initiating an startup in few",
      authorTitle: "Jakki James"
  },
  {
      img: "news2-2.jpg",
      title:"Tensive quality vectors life through strategies",
      authorTitle: "Joseph"
  },
  {
      img: "news2-3.jpg",
      title:"How to start initiating an startup in few",
      authorTitle: "Jakki James"
  }
];
    return (
        <>
        <section className="news-section-two">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-icon"></span>
              <span className="sub-title">News & Updates</span>
              <h2 className="letters-slide-up text-split">Recent Articles</h2>
            </div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="news-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src={`/images/resource/${item.img}`} alt="Image"/>
                      <img src={`/images/resource/${item.img}`} alt="Image"/>
                    </Link>
                  </figure>
                  <div className="content">
                    <div className="author-box">
                      <img src="images/resource/news1-thumb1.jpg" alt="Image"/>
                      <div className="author-info">
                        <div className="date">January 9, 2024</div>
                        <h6 className="name">by <span>{item.authorTitle}</span></h6>
                      </div>
                    </div>
                    <h4 className="title"><Link href="news-details">{item.title}</Link></h4>
                    <div className="text">Lorem ipsum dolor sit amet, cons auctor a liquet. Aenean sollicitudi,bibendu.</div>
                    <Link href="news-details" className="read-more">Read More</Link>
                  </div>
                </div>
              </div>))}

              </div>
          </div>
        </section>
        
        </>
    );
};

export default News2;