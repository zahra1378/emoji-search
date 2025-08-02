import React,{useContext, useState, useEffect} from "react";
import './Search.css';
import emojiContext from "../../context/emojiContext";


const Search = ()=>{
    const { emojis, loading } = useContext(emojiContext);
    const [searchValue, setSearchValue] = useState(""); 

    const filteredEmojis = (emojis || []).filter((emoji) => {
        const term = searchValue.toLowerCase();
        return (
          (emoji.title || "").toLowerCase().includes(term) ||
          (emoji.keywords || "").toLowerCase().includes(term)
        );
      });

    const handleChange = (e)=>{
        setSearchValue(e.target.value);
    }
    
    return(
        <div className="Search">
            <h3 className="Search_title">Let's Find Your Emoji 😊</h3>
            <input 
            type="text" 
            className="Search_inp" 
            placeholder="Search Your Emoji"
            onChange={handleChange}
            />
            {searchValue && (
                <div className="results">
                    {filteredEmojis.length > 0 ? (
                        filteredEmojis.map((emoji,index)=>(
                            <div key={index} className="result_item">
                                <span className="emoji_symbol">{emoji.symbol}</span>
                                <span className="emoji_title">{emoji.title}</span>
                            </div>
                        ))
                    ) : (
                        <p className="no_result">Sorry No Result Found!</p>
                    )}    
                </div>
            )}
        </div>
    )
}

export default Search;