import Link from 'next/link';

const News1 = () => {
  const data = [
    {
      img: "news1-1.jpg",
      title: "איך להקים סטארטאפ בכמה שלבים פשוטים",
      authorTitle: "ג'קי ג'יימס"
    },
    {
      img: "news1-2.jpg",
      title: "אסטרטגיות חכמות לשיפור איכות החיים",
      authorTitle: "יוסף"
    },
    {
      img: "news1-3.jpg",
      title: "איך להקים סטארטאפ בכמה שלבים פשוטים",
      authorTitle: "ג'קי ג'יימס"
    }
  ];

  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-icon"></span>
            <span className="sub-title">חדשות ועדכונים</span>
            <h2 className="letters-slide-up text-split">כתבות אחרונות</h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="news-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <figure className="image">
                    <Link href="news-details">
                      <img src={`/images/resource/${item.img}`} alt="Image" />
                      <img src={`/images/resource/${item.img}`} alt="Image" />
                    </Link>
                  </figure>
                  <div className="content">
                    <ul className="post-meta">
                      <li>9 בינואר 2024</li>
                      <li><i className="fal fa-comment"></i>14</li>
                    </ul>
                    <h4 className="title">
                      <Link href="news-details">{item.title}</Link>
                    </h4>
                    <div className="author-box">
                      <img src="/images/resource/news1-thumb1.jpg" alt="image" />
                      <h6 className="name">
                        מאת{" "}
                        <span>
                          <Link href="news-details">{item.authorTitle}</Link>
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="btn-box text-center">
              <Link href="news-details" className="theme-btn btn-style-one">
                <span className="btn-title">לצפייה בכל החדשות</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default News1;