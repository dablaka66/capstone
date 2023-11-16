import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";
import CharacterPage from "./pages/CharacterPage";
import HousesPage from "./pages/HousesPage";
import AppRoute from "./routes/AppRoute";
import MainNavBar from "./NavigationBars/MainNavBar";

function App() {
  return (
    <div className="container container-fluid">
      <Router>
        <h1 className="badge text-bg-info">Capstone guided project </h1>
        <header>
          <div className="header">
            <div className="logo">
              <img
                src={require("../src/images/gifs/Intro-logo.gif")}
                className="image-logo"
                alt={"Game of Thrones}"}
              />
            </div>
            <div className=" container">
              {" "}
              <MainNavBar />
            </div>
          </div>
        </header>
        <main>
          <AppRoute />
        </main>
        <footer>
          <div className="text-bg-dark">This is the footer for now</div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
