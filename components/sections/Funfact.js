import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact = () => {
  return (
    <>
      <section className="funfact-section">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">

              <div className="counter-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon flaticon-connected-car"></i>
                  </div>
                  <div className="counter-one">
                    <CounterUp count={32002} time={3} />
                  </div>
                  <h4 className="counter-text">רכבים מיוחדים</h4>
                </div>
              </div>

              <div className="counter-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="icon-box two">
                    <i className="icon flaticon-destination"></i>
                  </div>
                  <div className="counter-one">
                    <CounterUp count={16008} time={3} />
                  </div>
                  <h4 className="counter-text">נסיעות שבוצעו</h4>
                </div>
              </div>

              <div className="counter-block col-lg-4 col-md-6">
                <div className="inner-box">
                  <div className="icon-box three">
                    <i className="icon flaticon-location"></i>
                  </div>
                  <div className="counter-one">
                    <CounterUp count={17068} time={3} />
                  </div>
                  <h4 className="counter-text">נוסעים שהוסעו</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Funfact
