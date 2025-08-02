import React, { useContext, useEffect, useState, useCallback } from "react";
import './Home.css';
import emojiContext from "../../context/emojiContext";

const Home = () => {
  const ITEMS_PER_PAGE = 100;
  const { emojis, loading } = useContext(emojiContext);

  const [pageCounts, setPageCounts] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  useEffect(() => {
    const totalPages = Math.ceil((emojis?.length || 0) / ITEMS_PER_PAGE);
    setPageCounts(totalPages);
  }, [emojis]);

  const handleClicksOnPages = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
    window.scrollTo(0, 0);
  }, []);

  const startIndex = (activePageNumber - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEmojis = (emojis || []).slice(startIndex, endIndex);

  return (
    <div className="Home">
      <h3 className="emoji_box_title">List Of Emojis</h3>
      <div className="loading_data">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            Emojis loaded!<br />We Have {emojis.length} emojis
          </div>
        )}
      </div>
      <div className="emojis_container">
        {currentEmojis.map((e, index) => (
          <div key={index} className="emoji_card">
            <span className="emoji_symbol">{e.symbol}</span>
            <span className="emoji_title">{e.title}</span>
          </div>
        ))}
      </div>
      <div className="pagination_wrapper">
        <ul className="Pagination">
          {Array.from({ length: pageCounts }).map((_, index) => (
            <li key={index} className={activePageNumber === index + 1 ? 'active' : ''}>
              <button
                onClick={() => handleClicksOnPages(index + 1)}
                className="paginationBTN"
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
