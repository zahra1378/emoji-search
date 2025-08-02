import React, { useEffect, useState } from "react";
import emojiContext from "./emojiContext";

const EmojiProvider = ({ children }) => {
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmojis = async () => {
      try {
        const res = await fetch("https://raw.githubusercontent.com/ahfarmer/emoji-search/master/src/emojiList.json");
        const data = await res.json();
        setEmojis(data);
      } catch (err) {
        console.error("خطا در لود ایموجی‌ها:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEmojis();
  }, []);

  return (
    <emojiContext.Provider value={{ emojis, loading }}>
      {children}
    </emojiContext.Provider>
  );
};

export default EmojiProvider;
