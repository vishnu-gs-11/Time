import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <p className="home-heading">This Application was developed using React framework</p>
      <ol className="ul-list">
        <p>The Concepts and applications build here:</p>
        <li className="li">
          Counter :<p className="li-para">Used state and changing the state concepts</p>
        </li>
        <li className="li">
          Stopwatch :
          <p className="li-para">Used mounting and unmounting concepts including state</p>
        </li>
        <li className="li">
          Routing :
          <p className="li-para">
            Used 5th version of react-router-dom and the components like
            BrowserRouter, Switch and Route
          </p>
        </li>
      </ol>
      <div className="testimonal-container">
      <p>For more details about the creator visit</p>
      <p>
        <a href="https://vishnuportfolio.ccbp.tech/">
          vishnuportfolio.ccbp.tech
        </a>
      </p>
      </div>
    </div>
  );
};

export default Home;
