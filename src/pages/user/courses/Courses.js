import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "../../../components/user/courses/Course";
import axios from "axios";
import CoursesCategoryBar from "../../../components/user/courses/CoursesCategoryBar";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import { userContext } from "../../../UserContext";
import { useSelector } from "react-redux";
import {Grid} from '@mui/material'

export default function Courses() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    currentUser && fetch(`${process.env.REACT_APP_API}/api/student/allowedCourses`, {
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
        setCourses(info.courses);
      })
      .catch((err) => {
        console.log(err);
        // err.then(e => {error.current.textContent = e.message});
      }); 
    setIsLoading(false);
  }, []);

  return (
    <div className="courses container">
      {currentUser ? (<div className="courses-wrapper">
        {/* <div className="category-wrap">
          <CoursesCategoryBar />
        </div> */}
        <div className="courses-content">
          <h3 className="courses-title">الدورات</h3>
          <Grid container sx={{rowGap:"10px",columnGap:"10px"}}>
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
              courses?.map((course, index) => {
                return (
                  <Grid key={course.id+'werw'} item xs={12} sm={5.5} lg={3.8}>
                    <Course course={course} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
      </div>) : (<h1 style={{marginBottom: '300px'}}>يرجى تسجيل الدخول للتمكن من مشاهدة الدورات</h1>)}
      
    </div>
  );
}
