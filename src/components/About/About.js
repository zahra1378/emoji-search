import React from "react";
import './About.css';

const About= ()=>{
    return(
        <div className="About">
            <div className="About_container">
                <h3 className="About_title">Sth About Us!</h3>
                <p className="About_text">Welcome to Emoji Finder! 😊
                    <br/>
                    This simple yet fun tool helps you explore and search emojis in real-time. Whether you're looking for the perfect smiley, an animal, a symbol, or something to express your mood, just type a keyword and we'll instantly show you the most relevant emojis.
                    <br/>
                    Built with love using React 💻 and designed to be minimal and fast, this app is a great example of how hooks, components, and state management come together beautifully.
                    <br/>
                    Try it out and enjoy exploring the world of emojis! 🎉
                </p>
            </div>
        </div>
    );
};

export default About;