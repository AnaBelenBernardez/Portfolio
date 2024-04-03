// import React from "react";
// import "./style.css";

// function PhotosStack() {
//   return (
//     <div className="photosAbout">
//       <div id="thats-me" className="item">
//         <div className="polaroid">
//           <img loading="lazy" src="\assets\yep_thats_me.jpg" />
//           <div className="caption mirror">✌😁</div>
//         </div>
//       </div>
//       <div id="teamwork" className="item">
//         <div className="polaroid">
//           <img loading="lazy" src="\assets\team.jpeg" />
//           <div className="caption">-`♡´-</div>
//         </div>
//       </div>
//       <div id="hobbies" className="item">
//         <div className="polaroid">
//           <img loading="lazy" src="\assets\hobbies.jpg" />
//           <div className="caption">🌱🎮🎲🍜📚</div>
//         </div>
//       </div>

//       <div id="drogo" className="item">
//         <div className="polaroid">
//           <img loading="lazy" src="\assets\Drogo.png" />
//           <div className="caption">Drogo 🖤</div>
//         </div>
//       </div>
//       <div id="capi" className="item">
//         <div className="polaroid">
//           <img loading="lazy" src="\assets\Capi.png" />
//           <div className="caption">Capi 🧡</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PhotosStack;

// PhotosStack.jsx
import React, { useState, useEffect } from "react";
import "./style.css";
const PhotosStack = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    { title: "Comment Card 1", content: "Lorem ipsum" },
    { title: "Comment Card 2", content: "Vestibulum nunc massa" },
    {
      title: "Comment Card 3",
      content:
        "Donec nunc ligula, vulputate quis mollis eu, interdum quis libero. Donec nulla ante, facilisis sit amet vulputate at, tincidunt a velit. Maece nulla.",
    },
    { title: "Comment Card 4", content: "Donec nunc ligula, vul nulla." },
  ];

  const handleClick = () => {
    const nextCard = (currentCard + 1) % cards.length;
    setCurrentCard(nextCard);
  };

  return (
    <ul className="cards">
      {cards.map((card, index) => (
        <li
          key={index}
          onClick={handleClick}
          className={`card ${index === currentCard ? "card--current" : ""}`}
        >
          <h1>{card.title}</h1>
          <p>{card.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PhotosStack;
