import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import examsSubjects from "../../../data/examsSubject";
import "../../../assest/css/user/exams/showCategorySubjectExam.css";
import ExamsCategoryBar from "../../../components/user/exams/ExamsCategorySidebar";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import EmptyCategory from "../../../components/user/util/EmptyCategory";

export default function ShowCategorySubjectsExam() {
  const { examType } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, [examType]);

  return (
    <div className="exams-category container">
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
            ) : (categories.length > 0 && categories.filter((e) => e.type == examType)[0].groups.length > 0 ? (
              categories.filter((e) => e.type == examType).map((box, index) =>  {
                return (
                  <div key={index + "m1"} className="box">
                    <h3 className="box-title">{box.title}</h3>
                    <div className="exams-wrapper">
                      {box.groups.map((group, index) => {
                        return (
                          <Link
                            to={`/exams/questions`}
                            className="link-quesions"
                            key={index + "z1"}
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
              ) : <EmptyCategory type="/exams" />)}
          </div>
        </div>
      </div>
    </div>
  );
}
