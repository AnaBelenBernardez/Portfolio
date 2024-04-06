import React, { useState, useEffect } from "react";
import "./style.css";

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && (
        <>
          <div className="overlay">
            <div class="loader">✧˖°.✦˳˖</div>
          </div>
        </>
      )}
    </>
  );
};

export default Loading;
