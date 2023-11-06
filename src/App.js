import './App.css';
import Cookie from './assets/cookie.png'
import React, { useRef } from "react"

// For this assignment you're going to make the cookie image do ONE 360 spin whenever it is clicked

// This is what you'll need:
// 1. CSS Animations
// 2. onClick event handler
// 3. useRef
// 4. Make your own function inside App() and classList.add('your-animation') whenever the onClick event is triggered

function App() {

  const cookie = useRef();

  let spinCookie = () => {

    if (cookie.current.classList.contains("spin")) return;
    cookie.current.classList.add("spin");

    // Remove class after it finishes
    setTimeout(() => {
      cookie.current.classList.remove("spin");
    }, 1000);
  }

  return (
    <div className="app">
      <img alt="cookie" src={Cookie} draggable="false" ref={cookie} onClick={spinCookie} />
    </div>
  );
}

export default App;

// Resources: ChatGPT, Mozilla Web Docs, W3Schools, Stack Overflow, Google, YouTube, and me (if needed) 
// Watch this video for a general overview on useRef: https://www.youtube.com/watch?v=A0T9-66uF74&ab_channel=LarryDev