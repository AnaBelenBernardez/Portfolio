import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { useReward } from "react-rewards";
import LanguageSelector from "../LanguageSelector";

function Footer() {
  const { t } = useTranslation();
  const { reward: confettiReward, isAnimating } = useReward(
    "rewardId",
    "emoji",
    {
      emoji: ["🧡", "✨"],
      elementSize: 12,
      elementCount: 70,
      decay: 0.95,
      spread: 70,
      zIndex: 999,
      position: "absolute",
    }
  );

  return (
    <footer className="footer">
      <div className="languageSelectorContainer">
        <LanguageSelector />
      </div>
      <p>
        {t("translation.footer")}
        <span title={t("translation.love")} className="confetti-container">
          <button
            className="love-button"
            disabled={isAnimating}
            onClick={() => {
              confettiReward();
            }}
          >
            <span id="rewardId" className="rewardId" />
            🧡
          </button>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
