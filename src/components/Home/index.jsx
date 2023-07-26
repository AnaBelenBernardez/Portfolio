import React from "react";
import "./style.css";
import Header from "../Header/index";
import Main from "../Main/index";
import Footer from "../Footer/index";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
