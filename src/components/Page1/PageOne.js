import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './page_one.css'


class PageOne extends React.Component {
  render() {
    return (
      <div className="page-1">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default PageOne;
