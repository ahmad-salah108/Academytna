import "../../assest/css/goldMemberShip/notFound.css";
import { Link } from "react-router-dom";
import notFoundImage from "../../images/notfound1.webp";
import { useEffect } from "react";

export default function MySessionsNotFound() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="notfound-forums-image-wrapper">
        <img src={notFoundImage} alt="" className="image" />
        <h5 className="notfound-text">عذرا لا يوجد جلسات خاصة بك </h5>
      </div>
      <div className="navgation-wrapper">
        <span className="navigation-text">للاطلاع علي جلسات الاخصائي اضغط</span>
        <Link to={"/psychologist/sessions"} className="navigation-link">
          هنا
        </Link>
      </div>
    </>
  );
}
