const Services2 = () => {
  const data = [
  {
    icon:"icon flaticon-taxi",
      title:"Book in Just 2 Tabs",
      description:"Curabitur ac quam aliquam vehicula semper sed vel elit et leo purus.."
  },
  {
    icon:"icon flaticon-mobile-app",
    title:"Track your driver",
    description:"Curabitur ac quam aliquam vehicula semper sed vel elit et leo purus."
  },
  {
    icon:"icon flaticon-taxi-6",
    title:"Pick & arrive safely",
    description:"Curabitur ac quam aliquam vehicula semper sed vel elit et leo purus."
  }
];
    return (
        <>
        <section className="work-section pt-0">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-icon"></span>
              <span className="sub-title">Order Taxi Online</span>
              <h2 className="letters-slide-up text-split">How It Works</h2>
            </div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="work-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <i className={item.icon}></i>
                  <div className="content">
                    <h4 className="title">{item.title}</h4>
                    <div className="text">{item.description}</div>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </section>
        </>
    );
};
export default Services2
