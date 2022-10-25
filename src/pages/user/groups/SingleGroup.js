import { useEffect, useState } from "react";
import { GoCalendar } from "react-icons/go";
import { useParams } from "react-router-dom";
import groupsData from "../../../data/groupsData";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../assest/css/user/groups/singleGroupPage.css";
import { BsFillHeartFill } from "react-icons/bs";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function SingleGropup() {
  const { groupId, groupType } = useParams();
  const [group, setGroup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    axios
      .get(
        `https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-class-details/${groupId}`
      )
      .then(function (response) {
        setGroup([
          {
            title:
              groupType == "arabic"
                ? "اللغة العربية"
                : groupType == "math"
                ? "الرياضيات"
                : groupType == "history"
                ? "التاريخ"
                : groupType == "economie"
                ? "الإقتصاد"
                : groupType == "etiquette"
                ? "الاداب"
                : groupType == "languages"
                ? "اللغات الاجنبية"
                : "",
            info: response.data.data,
          },
        ]);
        setTimeout(() => {
          document
            .querySelectorAll(".content-description")
            .forEach((e) => (e.innerHTML = response.data.data.about.ar));
        }, 0);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [groupId, groupType]);

  return (
    <div className="container singleGroup">
      {isLoading ? (
        <ClipLoader
          color={"#99DAE9"}
          loading={isLoading}
          cssOverride={{
            display: "block",
            borderWidth: "10px",
            margin: "50vh auto",
          }}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        group.length > 0 &&
        group.map((e) => {
          return (
            <div key={e.info.id}>
              <h4 className="group-title">{e.info.title.ar}</h4>
              <div className="group-wrapper">
                <div className="group-content">
                  <div>
                    <img
                      src={`https://pall.pal-lady.com/InfixLMS%20v5.0.0/${e.info.class.image}`}
                      alt="load.."
                      className="group-image"
                    />
                    <div className="calender">
                      <GoCalendar className="icon" />
                      <h3 className="time">
                        تبدأ يوم {e.info.class.start_date} الى يوم{" "}
                        {e.info.class.end_date} الساعة {e.info.class.time}
                      </h3>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="content-title">وصف</h3>
                    <p className="content-description"></p>
                  </div>
                  <div className="content">
                    <h3 className="content-title">الهدف من المجموعه </h3>
                    <p className="content-description"></p>
                  </div>
                  <div className="group-event">
                    <Link to={"#"} className="btn">
                      انضم الان
                    </Link>
                  </div>
                </div>

                <div className="">
                  <div className="data-wrapper">
                    <div className="flex justify-between items-start data">
                      <h2 className="group-title">{e.info.class.title.ar}</h2>
                      <div className="count">
                        <span className="number">العدد</span>
                        <span className="num">{e.info.enrolls.length}/20</span>
                      </div>
                    </div>
                    <div className="calender">
                      <GoCalendar className="icon" />
                      <h3 className="time">
                        تبدأ يوم {e.info.class.start_date} الى يوم{" "}
                        {e.info.class.end_date} الساعة {e.info.class.time}
                      </h3>
                    </div>
                    <div className="teacher-wrapper">
                      <div className="data-icon">
                        <FaUser className="icon" />
                      </div>
                      <span className="group-teacher">
                        الأستاذ <span>{e.info.user.name}</span>
                      </span>
                    </div>
                    <div className="join-event">
                      <Link to="#" className="btn">
                        انضم الان
                      </Link>
                      <label>
                        <input
                          type="checkbox"
                          name="favorite"
                          style={{ display: "none" }}
                        />
                        <BsFillHeartFill className="favorite" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
