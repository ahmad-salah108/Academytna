import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "../../../assest/css/user/courses/singlecourse.css";
import { HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import AccordinCourse from "../../../components/user/courses/AccordainCourse";
import CourseBox from "../../../components/user/courses/CourseBox";
import axios from "axios";

export default function SingleCourse() {
  const { courseId, courseType } = useParams();
  const [course, setCourse] = useState({});
  const [goals, setGoals] = useState('');

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

    axios
      .get(
        `https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-course-details/${courseId}`
      )
      .then(function (response) {
        setCourse([
          {
            title:
              courseType == "arabic"
                ? "اللغة العربية"
                : courseType == "math"
                ? "الرياضيات"
                : courseType == "history"
                ? "التاريخ"
                : courseType == "economie"
                ? "الإقتصاد"
                : courseType == "etiquette"
                ? "الاداب"
                : courseType == "languages"
                ? "اللغات الاجنبية"
                : "",
            info: response.data.data,
          },
        ]);
        var strippedHtml = response.data.data.requirements.ar.replace(/<[^>]+>/g, '');
        var result = strippedHtml.replace(/&nbsp;/g, ' ');
        setGoals(result);
        setTimeout(() => {
          document.querySelector('.singleCourse-desc').innerHTML = response.data.data.about.ar;
        }, 0);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [courseId, courseType]);

  return (
    <div className="container singleCourse">
      {course.length > 0 &&
        course.map((e) => {
          return (
            <div key={e.info.id}>
              <div className="singleCourse-content">
                <div className="singleCourse-details">
                  <h3 className="singleCourse-title">{e.title}</h3>
                  <p className="singleCourse-desc"></p>
                  <div className="goals">
                    <h3 className="goals-title">اهداف الدوره </h3>
                    <div className="goals-parts">
                      {goals.split('،').map((box, index) => {
                    return (
                      <div className="goal" key={index + "z1"}>
                        <HiBadgeCheck className="goal-icon" />
                        <h3 className="goal-title">{box}</h3>
                      </div>
                    );
                  })}
                    </div>
                  </div>
                  <div className="study">
                    <h3 className="study-title">منهاج الدراسه </h3>
                    <div>
                      {e.info.chapters?.map((box, index) => {
                        return <AccordinCourse chapter={box} chapterId={box.id} lessons={e.info.lessons} key={index + "k1m"} />;
                      })}
                    </div>
                  </div>
                </div>
                <div><CourseBox course={e.info} /></div>
              </div>
              <div className="singlCourse-link">
                <Link className="link">اشتراك</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
