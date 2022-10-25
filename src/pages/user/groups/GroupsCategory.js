import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Group from "../../../components/user/groups/Group";
import GroupsCategoryBar from "../../../components/user/groups/GroupCategoryBar";
import groupsData from "../../../data/groupsData";
import "../../../assest/css/user/groups/categoryGroupsPage.css";
import EmptyCategory from "../../../components/user/util/EmptyCategory";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function GroupsCategory() {
  // get gategory from url params
  const { groupType } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

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
  }, [groupType]);

  return (
    <div className="groups-category container">
      <div className="groups-wrapper">
        <div className="category-wrap">
          <GroupsCategoryBar />
        </div>
        <div className="groups-content">
          <h3 className="title-group">المجموعات</h3>
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
            ) : categories?.length &&
              categories.filter((e) => e.type == groupType)[0].groups.length >
                0 ? (
              categories
                .filter((e) => e.type == groupType)
                .map((box, index) => {
                  return (
                    <div key={index + "m1"} className="box">
                      <h3 className="box-title">{box.title}</h3>
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
            ) : (
              <EmptyCategory type="/groups" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
