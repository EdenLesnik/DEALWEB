import Link from "next/link";
import { useState } from "react";

const Error = () => {

  return (
    <>
      <section className="">
        <div className="auto-container pt-120 pb-70">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div className="error-page__title-box">
                  <img src="/images/resource/404.jpg" alt="" />
                  <h3 className="error-page__sub-title">העמוד לא נמצא!</h3>
                </div>
                <p className="error-page__text">
                  מצטערים, לא הצלחנו למצוא את העמוד הזה! <br />
                  העמוד שחיפשת כנראה לא קיים.
                </p>
                <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="חפש כאן..." />
                    <button type="submit">
                      <i className="lnr lnr-icon-magnifier"></i>
                    </button>
                  </div>
                </form>
                <Link href="/" className="theme-btn btn-style-one shop-now">
                  <span className="btn-title">חזרה לדף הבית</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};
export default Error
