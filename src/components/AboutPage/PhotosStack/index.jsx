import React, { useEffect } from "react";
import "./style.css";

function PhotosStack() {
  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = cardsContainer.querySelectorAll(".card");
    let currentCard = cardsContainer.querySelector(".card--current");
    let nextCard;

    const clickHandler = () => {
      cards.forEach((c) => {
        c.classList.remove("card--current", "card--out", "card--next");
      });

      currentCard.classList.add("card--out");
      nextCard = currentCard.nextElementSibling;
      currentCard = nextCard ? nextCard : cards[0];
      currentCard.classList.add("card--current");
      nextCard = currentCard.nextElementSibling;
      nextCard = nextCard ? nextCard : cards[0];
      nextCard.classList.add("card--next");
    };

    cardsContainer.addEventListener("click", clickHandler);

    if (!currentCard) {
      currentCard = cards[cards.length - 1];
      cards[0].click();
    }

    cardsContainer.classList.add("cards--active");

    return () => {
      cardsContainer.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <main>
      <ul className="cards">
        <li className="card">
          <div className="stack">
            <div className="polaroid">
              <img
                id="me-stack"
                loading="lazy"
                src="\assets\yep_thats_me.jpg"
              />
              <div className="caption mirror">✌😁</div>
            </div>
          </div>
        </li>
        <li className="card ">
          <div className="stack">
            <div className="polaroid">
              <img id="team-stack" loading="lazy" src="\assets\team.jpeg" />
              <div className="caption">-`♡´-</div>
            </div>
          </div>
        </li>
        <li className="card ">
          <div className="stack">
            <div className="polaroid">
              <img
                id="hobbies-stack"
                loading="lazy"
                src="\assets\hobbies.jpg"
              />
              <div className="caption">🌱🎮🎲🍜📚</div>
            </div>
          </div>
        </li>
        <li className="card ">
          <div className="stack">
            <div className="polaroid">
              <img id="drogo-stack" loading="lazy" src="\assets\Drogo600.png" />
              <div className="caption">Drogo 🖤</div>
            </div>
          </div>
        </li>
        <li className="card ">
          <div className="stack">
            <div className="polaroid">
              <img id="capi-stack" loading="lazy" src="\assets\Capi.jpg" />
              <div className="caption">Capi 🧡</div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default PhotosStack;
