import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Course from "../../../components/user/courses/Course";
import "../../../assest/css/user/courses/coursesCategoryPage.css";
import EmptyCategory from "../../../components/user/util/EmptyCategory";
import CoursesCategoryBar from "../../../components/user/courses/CoursesCategoryBar";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function CoursesCategoryPage() {
  const { courseType } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    
    axios
      .get("https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-all-courses")
      .then(function (response) {
        // handle success
        setCategories([
          {
            type: "arabic",
            title: "اللغة العربية",
            groups: response.data.data.filter((e) => e.category_id == 1),
          },
          {
            type: "math",
            title: "الرياضيات",
            groups: response.data.data.filter((e) => e.category_id == 2),
          },
          {
            type: "history",
            title: "التاريخ",
            groups: response.data.data.filter((e) => e.category_id == 3),
          },
          {
            type: "economie",
            title: "الاقتصاد",
            groups: response.data.data.filter((e) => e.category_id == 4),
          },
          {
            type: "etiquette",
            title: "الاداب",
            groups: response.data.data.filter((e) => e.category_id == 5),
          },
          {
            type: "languages",
            title: "اللغات الأجنبية",
            groups: response.data.data.filter((e) => e.category_id == 6),
          },
        ]);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [courseType]);

  return (
    <div className="courses-category container">
      <div className="courses-wrapper">
        <div className="category-wrap">
          <CoursesCategoryBar />
        </div>

        <div className="courses-content">
          <h3 className="title">الدورات </h3>
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
            ) : categories.length > 0 &&
              categories.filter((e) => e.type == courseType)[0].groups.length >
                0 ? (
              categories
                .filter((e) => e.type == courseType)
                .map((box, index) => {
                  return (
                    <div key={index + "m1"} className="box">
                      <h3 className="box-title">{box.title}</h3>
                      <div className="boxes-wrapper">
                        {box.groups.map((course) => {
                          return (
                            <Course
                              key={course.id}
                              course={course}
                              type={box.type}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
            ) : (
              <EmptyCategory type="/courses" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
