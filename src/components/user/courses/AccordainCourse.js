import { useState } from "react";
import "../../../assest/css/user/courses/AccordinCourse.css";
import { IoIosVideocam } from "react-icons/io";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function AccordinCourse({ unit }) {
  const [show, setShow] = useState(false);

  return (
    <div className="course-unit">
      <div className="unit">
        <span>{unit.title} </span>
        <button className="btn" onClick={() => setShow((back) => !back)}>
          {show ? "-" : "+"}
        </button>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            className="boxes-unit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {unit.lessons?.map((lesson, index) => {
                return (
                  <div
                    key={index + "m9"}
                    className={`box-unit ${
                      index % 2 !== 0 ? "notColor" : "color"
                    }`}
                  >
                    <div className="unit-content">
                      <IoIosVideocam className="unit-video" />
                      <a href={lesson.videoUrl} target='_blank' className="unit-text">{lesson.title}</a>
                    </div>
                    <BiLockAlt />
                  </div>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
