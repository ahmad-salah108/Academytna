import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Group from "../../../components/user/groups/Group";
import GroupsCategoryBar from "../../../components/user/groups/GroupCategoryBar";
import gropusData from "../../../data/groupsData";
import "../../../assest/css/user/groups/groupsPage.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Groups() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get page scroll to top
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    axios
      .get("https://pall.pal-lady.com/InfixLMS%20v5.0.0/api/get-all-classes")
      .then(function (response) {
        console.log(response.data.data);
        // handle success
        setCategories([
          {
            type: "arabic",
            title: "اللغة العربية",
            groups: response.data.data.filter((e) => e.class.category_id == 1),
          },
          {
            type: "math",
            title: "الرياضيات",
            groups: response.data.data.filter((e) => e.class.category_id == 2),
          },
          {
            type: "history",
            title: "التاريخ",
            groups: response.data.data.filter((e) => e.class.category_id == 3),
          },
          {
            type: "economie",
            title: "الاقتصاد",
            groups: response.data.data.filter((e) => e.class.category_id == 4),
          },
          {
            type: "etiquette",
            title: "الاداب",
            groups: response.data.data.filter((e) => e.class.category_id == 5),
          },
          {
            type: "languages",
            title: "اللغات الأجنبية",
            groups: response.data.data.filter((e) => e.class.category_id == 6),
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
    <div className="groups container">
      <div className="groups-wrapper">
        <div className="category-wrap">
          <GroupsCategoryBar />
        </div>
        <div className="groups-content">
          <h3 className="groups-title">المجموعات</h3>
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
              categories?.length &&
              categories
                .filter((e) => e.groups.length > 0)
                .map((box, index) => {
                  return (
                    <div key={index + "m1"} className="box">
                      <h3 className="box-title">{box.title}</h3>
                      <Link
                        to={`/groups/${box.type.toLowerCase()}`}
                        className="watchAll"
                      >
                        مشاهدة الجميع
                      </Link>
                      <div className="boxes-wrapper">
                        {box.groups.map((group) => {
                          return (
                            <Group
                              key={group.id}
                              group={group}
                              type={box.type}
                            />
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
