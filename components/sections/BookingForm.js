const BookingForm = () => {
  return (
    <>
      <section className="booking-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
        <div className="bg-overlay"></div>
        <div className="auto-container">
  
          <div className="booking-form">
            <div className="sec-title">
              <h2 className="letters-slide-up text-split">הזמינו את הנסיעה שלכם!</h2>
              <div className="text">כדי להזמין מונית, נא לבחור מהאפשרויות הבאות:</div>
            </div>
            <form method="get" action="#">
              <div className="row">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <select className="custom-select">
                    <option>בחר סוג מונית</option>
                    <option>מונית היברידית</option>
                    <option>מונית עירונית</option>
                    <option>מונית שטח (SUV)</option>
                    <option>לימוזינה</option>
                  </select>
                </div>
  
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="נקודת התחלה" required />
                    <i className="icon fal fa-map-marker-alt"></i>
                  </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="יעד סיום" required />
                    <i className="icon fal fa-map-marker-alt"></i>
                  </div>
                </div>
  
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <div className="boxed-outer-box">
                    <div className="boxed">
                      <input type="radio" id="android" name="skills" defaultChecked />
                      <label htmlFor="android">נסיעה יחידנית</label>
                    </div>
                    <div className="boxed">
                      <input type="radio" id="ios" name="skills" />
                      <label htmlFor="ios">נסיעה משפחתית</label>
                    </div>
                  </div>
                </div>
  
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="text" name="name" placeholder="שם מלא" required />
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="email" name="email" placeholder="כתובת אימייל" required />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="מספר טלפון" required />
                    <i className="icon fal fa-mobile"></i>
                  </div>
                </div>
  
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="theme-btn btn-style-one">
                    <span className="btn-title">מצא מונית</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
  
};
export default BookingForm
