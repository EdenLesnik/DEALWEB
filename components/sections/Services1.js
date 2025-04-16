import Link from 'next/link';
const Services1 = () => {
  const data = [
    {
      img: "service1-1.jpg",
      title: "הסעות עסקיות",
      description: "שירות מוניות מקצועי לעסקים, ישיבות ופגישות – בנוחות ובזמן."
    },
    {
      img: "service1-2.jpg",
      title: "הזמנה אונליין",
      description: "הזמינו מונית בקלות ובמהירות דרך האתר או האפליקציה שלנו."
    },
    {
      img: "service1-3.jpg",
      title: "נסיעות עירוניות",
      description: "מוניות זמינות לנסיעות יומיומיות בתוך העיר – בבטחה וביעילות."
    }
  ];
  
    return (
        <>
        <section className="service-section">
          <div className="auto-container">
            <div className="outer-box">
              <div className="row">
                
              {data.map((item, i) => (
                <div key={i} className="service-block col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src={`/images/resource/${item.img}`} alt="Image"/></figure>
                    </div>
                    <div className="content">
                      <h4 className="title"><Link href="page-service-detailstml">{item.title}</Link></h4>
                      <div className="text">{item.description}</div>
                    </div>
                  </div>
                </div>))}
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Services1
