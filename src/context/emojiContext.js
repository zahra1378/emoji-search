import { createContext } from "react";

const emojiContext = createContext({ emojis: [], loading: true });

export default emojiContext;
