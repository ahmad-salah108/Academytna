import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "../../../assest/css/user/courses/singlecourse.css";
import { Link } from "react-router-dom";
import AccordinCourse from "../../../components/user/courses/AccordainCourse";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

export default function SingleCourse() {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [course, setCourse] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    currentUser &&
      fetch(`${process.env.REACT_APP_API}/api/student/allowedCourses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: currentUser.token,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(res.json());
          }
        })
        .then((info) => {
          console.log(info);
          setCourse(info.courses.filter((e) => e.id == params.courseId));
        })
        .catch((err) => {
          console.log(err);
          // err.then(e => {error.current.textContent = e.message});
        });
    currentUser &&
      fetch(
        `${process.env.REACT_APP_API}/api/course/fulldata/${params.courseId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: currentUser.token,
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(res.json());
          }
        })
        .then((info) => {
          setUnits(info.course.Units);
        })
        .catch((err) => {
          console.log(err);
        });
    setIsLoading(false);
  }, []);

  return (
    <div className="container singleCourse">
      {currentUser ? (<>
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
          course?.map((e, i) => {
            return (
              <div key={i + "qw"}>
                <div className="singleCourse-content">
                  <div className="singleCourse-details">
                    <h3 className="singleCourse-title">{e.title}</h3>
                    <div className="goals">
                      <h3 className="goals-title">اهداف الدورة </h3>
                      <div className="goals-parts">
                        <div className="goal">
                          <p className="singleCourse-desc">{e.goals}</p>
                        </div>
                      </div>
                    </div>
                    <div className="study">
                      <h3 className="study-title">منهاج الدراسة </h3>
                      <div>
                        {units?.map((unit, index) => {
                          return (
                            <AccordinCourse
                              unit={unit}
                              key={index + "k1m"}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <CourseBox course={e} />
                  </div> */}
                </div>
                <div className="singlCourse-link">
                  <Link className="link">اشتراك</Link>
                </div>
              </div>
            );
          })
        )}
      </>) : (<h1 style={{marginBottom: '300px'}}>يرجى تسجيل الدخول للتمكن من مشاهدة الدورة</h1>)}
    </div>
  );
}
