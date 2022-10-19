import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Group from "../../../components/user/groups/Group";
import examsSubjects from "../../../data/examsSubject";
import "../../../assest/css/user/exams/showSubjectsExam.css";
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function ShowSubjectsExam() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get page scroll to top
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

    axios
      .get("https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-all-quizzes")
      .then(function (response) {
        // handle success
        setCategories([
          {
            type: "arabic",
            title: "اللغة العربية",
            groups: response.data.data.filter((e) => e.quiz.category_id == 1),
          },
          {
            type: "math",
            title: "الرياضيات",
            groups: response.data.data.filter((e) => e.quiz.category_id == 2),
          },
          {
            type: "history",
            title: "التاريخ",
            groups: response.data.data.filter((e) => e.quiz.category_id == 3),
          },
          {
            type: "economie",
            title: "الاقتصاد",
            groups: response.data.data.filter((e) => e.quiz.category_id == 4),
          },
          {
            type: "etiquette",
            title: "الاداب",
            groups: response.data.data.filter((e) => e.quiz.category_id == 5),
          },
          {
            type: "languages",
            title: "اللغات الأجنبية",
            groups: response.data.data.filter((e) => e.quiz.category_id == 6),
          },
        ]);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="exams container">
      <div className="groups-wrapper">
        <div className="category-wrap">
          <ExamsCategoryBar />
        </div>
        <div className="groups-content">
          <h3 className="title">الاختبارات</h3>
          <div>
            {isLoading ? (
              <ClipLoader
                color={"#99DAE9"}
                loading={isLoading}
                cssOverride={{
                  display: "block",
                  marginTop: "100px",
                  marginInline: "auto",
                  borderWidth: "10px",
                }}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              categories.length > 0 &&
              categories.filter(e => e.groups.length > 0).map((box, index) => {
                return (
                  <div key={index + "m1"} className="box">
                    <h3 className="box-title">{box.title}</h3>
                    <Link
                      to={`/exams/${box.type.toLowerCase()}`}
                      className="watchAll"
                    >
                      مشاهدة الجميع
                    </Link>
                    <div className="exams-wrapper">
                      {box.groups.slice(0, 3).map((group, index) => {
                        return (
                          <Link
                            to={`/exams/${box.type.toLowerCase()}/${group.id}`}
                            key={index + "z1"}
                            className="link-quesions"
                          >
                            <div className="exam-subject-name">
                              {group.quiz.title.ar}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
