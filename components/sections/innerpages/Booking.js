import Link from "next/link";

const TeamGrid = () => {

  return (
    <>
      <section className="booking-section bg-light pt-120 pb-120 pb-md-70">
        <div className="auto-container">
          {/* טופס הזמנת מונית */}
          <div className="booking-form mx-auto">
            <div className="sec-title">
              <h2 className="letters-slide-up text-split">הזמן את נסיעת המונית שלך!</h2>
              <div className="text">כדי להזמין מונית, בחר מהאפשרויות הבאות:</div>
            </div>
            <form method="get" action="#">
              <div className="row">
                <div className="form-group col-lg-12">
                  <select className="custom-select">
                    <option value="">בחר סוג מונית</option>
                    <option value="">מונית היברידית</option>
                    <option value="">מונית עירונית</option>
                    <option value="">מונית SUV</option>
                    <option value="">לימוזינה</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="מיקום התחלה" required />
                    <i className="icon fal fa-map-marker-alt"></i>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="מיקום סיום" required />
                    <i className="icon fal fa-map-marker-alt"></i>
                  </div>
                </div>
                {/* כפתור בחירה */}
                <div className="form-group col-lg-12">
                  <div className="boxed-outer-box">
                    <div className="boxed">
                      <input type="radio" id="android" name="skills" value="Single" checked />
                      <label htmlFor="android">יחיד</label>
                    </div>
                    <div className="boxed">
                      <input type="radio" id="ios" name="skills" value="Family" />
                      <label htmlFor="ios">משפחתי</label>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <input type="text" name="name" placeholder="שם מלא" required />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" name="email" placeholder="כתובת אימייל" required />
                </div>
                <div className="form-group col-lg-12">
                  <div className="input-outer">
                    <input type="text" name="destination" placeholder="מספר טלפון" required />
                    <i className="icon fal fa-mobile"></i>
                  </div>
                </div>
                <div className="form-group col-lg-12">
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
export default TeamGrid
