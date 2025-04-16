import Link from "next/link";
import { useState } from "react";

const Faq = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>
      <section className="faqs-section pt-120 pb-70">
        <div className="auto-container">
          <div className="row">
            {/*  FAQ Column  */}
            <div className="faq-column mb-50 col-lg-6">
              <div className="inner-column">
                <ul className="accordion-box style-two wow fadeInLeft">
                  {/* Block */}
                  <li className="accordion block active-block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                      האם יש אחריות על השירותים שלכם?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">בהחלט. אנו מבטיחים שירות איכותי ובטוח לכל נסיעה עם DealTaxi, כולל מענה מהיר לכל בעיה שתיתקל בה במהלך הנסיעה.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                      מה כולל השירות שלכם?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">השירות כולל נסיעות מהירות ובטוחות, אפשרות להזמנת מונית מראש, מעקב בזמן אמת, שירות לקוחות זמין 24/7, והכול במחירים משתלמים.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                      אילו שיטות תשלום זמינות?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">ניתן לשלם בכרטיס אשראי, ביט, או מזומן. אנחנו שוקדים על הוספת אפשרות גם לארנק דיגיטלי בעתיד הקרוב.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                      תוך כמה זמן מגיעה המונית?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">בדרך כלל תוך 5-10 דקות מרגע ההזמנה, תלוי במיקום שלך ובזמינות הנהגים הקרובים.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*  FAQ Column  */}
            <div className="faq-column mb-50 col-lg-6">
              <div className="inner-column">
                <ul className="accordion-box style-two bg-transparent wow fadeInLeft">
                  {/* Block */}
                  <li className="accordion block active-block">
                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                      איך אתם מבטיחים בטיחות בנסיעות?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                      <div className="content border-bottom-0">
                        <div className="text">כל הנהגים שלנו עוברים בדיקות רקע קפדניות ורכבי החברה מתוחזקים באופן שוטף. בנוסף, המערכת מאפשרת מעקב בזמן אמת.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                      האם אפשר להזמין מונית מראש?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                      <div className="content border-bottom-0">
                        <div className="text">בהחלט! ניתן להזמין נסיעה מראש דרך האפליקציה שלנו ולבחור את השעה והמיקום הנוחים לך.</div>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(7)}>
                      האם יש שירות לנסיעות לעסקים?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                      <div className="content border-bottom-0">
                        <div className="text">כן, אנו מציעים פתרונות תחבורה לעסקים עם חשבוניות חודשיות, ניהול עובדים באפליקציה, ודוחות מסודרים – הכל בהתאם לצורכי הארגון.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};
export default Faq
