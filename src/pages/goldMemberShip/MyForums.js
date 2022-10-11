import "../../assest/css/goldMemberShip/myForums.css";
import { Link } from "react-router-dom";
import img1 from "../../images/منتدي 1.webp";
import Forum from "../../components/user/forums/Forum";
import { useEffect } from "react";

export default function MyForums() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  const data = [
    {
      type: "Arabic",
      title: "اللغة العربية",
      groups: [
        {
          id: "1",
          img: img1,
          title: "نادي الكتابة",
          teacher: "أنور نور",
        },
        {
          id: "1",
          img: img1,
          title: "نادي الكتابة",
          teacher: "أنور نور",
        },
        {
          id: "1",
          img: img1,
          title: "نادي الكتابة",
          teacher: "أنور نور",
        },
        {
          id: "1",
          img: img1,
          title: "نادي الكتابة",
          teacher: "أنور نور",
        },
      ],
    },
  ];

  return (
    <>
      <h2 className="myForums-title">
        النوادي والمنتديات التي تم الانضمام اليها{" "}
      </h2>
      <div>
        {data.length > 0 &&
          data.map((box, index) => {
            return (
              <div key={index + "m1"} className="box">
                <div className="myForums-wrapper">
                  {box.groups.map((forum, index) => {
                    return (
                      <Forum
                        key={forum.id}
                        forum={forum}
                        type={box.type}
                        goldurl={`/goldStudent/myForums/${box.type}/${forum.id}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="navgation-wrapper">
        <span className="navigation-text">
          للانتقال الي النوادي والمنتديات اضغط
        </span>
        <Link to={"/forums"} className="navigation-link">
          هنا
        </Link>
      </div>
    </>
  );
}
