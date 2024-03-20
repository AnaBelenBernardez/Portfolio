import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { useReward } from "react-rewards";

function Footer() {
  const { t } = useTranslation();
  const { reward: confettiReward, isAnimating } = useReward(
    "rewardId",
    "emoji",
    {
      emoji: ["🧡", "✦", "⟡"],
      elementSize: 12,
      elementCount: 50,
      decay: 0.95,
      spread: 70,
      zIndex: 999,
      position: "absolute",
    }
  );

  return (
    <footer className="footer">
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
    </footer>
  );
}

export default Footer;
