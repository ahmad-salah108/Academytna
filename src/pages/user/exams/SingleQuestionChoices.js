import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assest/css/user/exams/singleQuestionChoices.css";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <div className="single-question-choices">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className="question-box">
            <h5 className="question-title">
              {item.question_bank.question}
            </h5>
            {item.question_bank.question_mu && item.question_bank.question_mu.map(ans => (
                <div key={ans.id} className="answers-box">
                    <input type={"radio"} id={ans.id} name={ans.question_bank_id} />
                    <label htmlFor={ans.id} className="answer-title">
                        {ans.title}
                    </label>
                </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default function SingleQuestionChoices({ itemsPerPage, questions }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(questions.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(questions.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % questions.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
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
    </>
  );
}
