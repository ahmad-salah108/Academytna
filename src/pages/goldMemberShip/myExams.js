import "../../assest/css/goldMemberShip/myExams.css";
import { Link } from "react-router-dom";
import img1 from "../../images/منتدي 1.webp";
import ExamSubjectBox from "../../components/goldMemberShip/ExamSubjectBox";
import { useEffect } from "react";

export default function MyExams() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  const data = [
    {
      type: "Math",
      title: "مجموعة الرياضيات  ",
      groups: [
        {
          id: "1",
          img: img1,
          title: "مجموعة الرياضيات #1",
          lessonName: "الحصة الاولى",
          duration: "يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
          state: "لم تبدا",
        },
        {
          id: "2",
          img: img1,
          title: "مجموعة الرياضيات #1",
          lessonName: "الحصة الاولى",
          duration: "يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
          state: "لم تبدا",
        },
        {
          id: "3",
          img: img1,
          title: "مجموعة الرياضيات #1",
          lessonName: "الحصة الاولى",
          duration: "يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
          state: "لم تبدا",
        },
        {
          id: "4",
          img: img1,
          title: "مجموعة الرياضيات #1",
          lessonName: "الحصة الاولى",
          duration: "يوم الخميس من كل اسبوع من 6.00 م حتي 8.00 م",
          state: "لم تبدا",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        {data.length > 0 &&
          data.map((box, index) => {
            return (
              <div key={index + "m1"} className="box">
                <h2 className="myExams-title">{box.title}</h2>
                <div className="myExams-wrapper">
                  {box.groups.map((exam, index) => {
                    return (
                      <Link
                        to={`/forums/${box.type}/${exam.id}`}
                        key={index + "z1"}
                      >
                        <ExamSubjectBox exam={exam} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <h2 className="myExams-title">الاختبارات </h2>
        <div className="myExams-names-wrapper">
          <div className="myExam-name">اختبار الوحده الاولي مادة رياضيات</div>
          <div className="myExam-name">اختبار الوحده الاولي مادة رياضيات</div>
          <div className="myExam-name">اختبار الوحده الاولي مادة رياضيات</div>
        </div>
      </div>
    </>
  );
}
