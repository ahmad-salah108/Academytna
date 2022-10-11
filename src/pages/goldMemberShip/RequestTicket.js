import "../../assest/css/goldMemberShip/goldcontrolboard.css";
import image from "../../images/goldStudent/support.png";
import "../../assest/css/goldMemberShip/requestTicket.css";
import { useEffect } from "react";

export default function RequestTicket() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="request-ticket">
        <div className="request-ticket-content">
          <button className="request-ticket-title">طلب تذكرة</button>
          <div className="request-ticket-form">
            <div className="request-ticket-box">
              <label className="request-ticket-label">الاسم واللقب</label>
              <input type="text" name="name" />
            </div>
            <div className="request-ticket-box">
              <label className="request-ticket-label">
                الايميل او رقم الجوال{" "}
              </label>
              <input type="text" name="phone" />
            </div>
            <div className="request-ticket-box">
              <label className="request-ticket-label">نوع المشكلة </label>
              <input type="text" name="problemtype" />
            </div>
            <div className="request-ticket-box">
              <label className="request-ticket-label">شرح المشكلة</label>
              <textarea name="problemexplain"></textarea>
            </div>
          </div>
        </div>
        <div className="request-ticket-image">
          <img src={image} alt="load" />
        </div>
      </div>
      <div className="request-ticket-add">
        <button>اضافة </button>
      </div>
    </>
  );
}
