import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assest/css/user/exams/singleQuestionChoices.css";
import ReactPaginate from "react-paginate";
import { useRef } from "react";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} id={item.id} className="question-box">
            <h5 className="question-title">
              {item.question_bank.question
                .replace(/<[^>]+>/g, "")
                .replace(/&nbsp;/g, " ")}
            </h5>
            {item.question_bank.question_mu &&
              item.question_bank.question_mu.map((ans) => (
                <div key={ans.id} className="answers-box">
                  <input
                    type={"radio"}
                    id={ans.id}
                    name={ans.question_bank_id}
                  />
                  <label htmlFor={ans.id} className="answer-title">
                    {ans.title}
                  </label>
                </div>
              ))}
          </div>
        ))}
    </>
  );
}

export default function SingleQuestionChoices({ itemsPerPage, questions }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  // QUESTIONS AND ANSWERS IDS
  const [qa, setQA] = useState({});
  // ALL MARKS
  const [result, setResult] = useState(0);
  // FINISH BUTTON
  const finish = useRef();
  // DISPLAY MARK IN H1
  const mark = useRef();

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(questions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(questions.length / itemsPerPage));
    if (endOffset == pageCount) {
      finish.current.classList.remove("disabled");
    }
  }, [itemOffset, itemsPerPage]);

  useEffect(() => {
    // RETREIVING THE CHECK ON RADIO BUTTONS
    document.querySelectorAll(".question-box").forEach((e) => {
      for (let question in qa) {
        if (question == e.id) {
          e.querySelector(`[id="${qa[question]}"]`).checked = true;
        }
      }
    });
  }, [currentItems]);

  useEffect(() => {
    setResult(0);
    questions.forEach((e) => {
      for (let q in qa) {
        if (q == e.id) {
          e.question_bank.question_mu.forEach((ele) => {
            if (ele.id == qa[q] && ele.status == 1) {
              setResult((prev) => prev + +e.question_bank.marks);
            }
          });
        }
      }
    });
  }, [qa]);

  const handlePageClick = (event) => {
    // SAVING QUESTION ID AND ANSWER ID IN OBJECT
    document.querySelectorAll(".question-box").forEach((e, i) => {
      const questionID = e.id.toString();
      const answerID = (e.querySelector('[type="radio"]:checked') || "").id;
      answerID && setQA((prev) => ({ ...prev, [questionID]: answerID }));
    });
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    setItemOffset(newOffset);
  };

  const handleMark = (event) => {
    // ENSURE QUESTION ID AND ANSWER ID ARE SAVED
    document.querySelectorAll(".question-box").forEach((e, i) => {
      const questionID = e.id.toString();
      const answerID = (e.querySelector('[type="radio"]:checked') || "").id;
      answerID && setQA((prev) => ({ ...prev, [questionID]: answerID }));
    });

    mark.current.style.display = 'block';
  };

  return (
    <div className="single-question-choices">
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      <button ref={finish} onClick={handleMark} className={"finish disabled"}>
        إنهاء
      </button>
      <h1 ref={mark} style={{ textAlign: "center", display: 'none' }}>
        {result}
      </h1>
    </div>
  );
}
