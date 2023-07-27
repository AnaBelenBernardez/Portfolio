import React from "react";
import "./style.css";
import Header from "../Header/index";
import Main from "../Main/index";
import Footer from "../Footer/index";
import ScrollToTop from "../../details/ScrollToTop";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
