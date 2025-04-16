import Link from 'next/link';
const Driver = () => {
  const data = [
    {
      img: "team1-1.jpg",
      title: "טרישה גיבני",
      description: "נהגת בכירה, מנהלת"
    },
    {
      img: "team1-2.jpg",
      title: "תומס ווקר",
      description: "נהג מקצועי, מנהל"
    },
    {
      img: "team1-3.jpg",
      title: "רומן מורקו",
      description: "נהג ותיק, מנהל צוות"
    }
  ];

  return (
    <>
      <section className="team-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-icon"></span>
            <span className="sub-title">הנהגים המומחים שלנו</span>
            <h2 className="letters-slide-up text-split">הכירו את הנהגים שלנו</h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="team-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="content">
                    <h4 className="name">
                      <Link href="page-team-details.html">{item.title}</Link>
                    </h4>
                    <div className="designation">{item.description}</div>

                    <a href="tel:380503184707" className="info-btn">
                      <i className="icon fal fa-mobile"></i>{" "}
                      <strong>(+380) 50 318 47 07</strong>
                    </a>
                  </div>
                  <figure className="image">
                    <img src={`/images/resource/${item.img}`} alt="Image" />
                  </figure>
                  <ul className="social-icon-two">
                    <li>
                      <a href="#"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Driver
