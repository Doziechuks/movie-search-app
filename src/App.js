import classes from "./App.module.css";

import NavBar from "./components/navBar/navBar";
import Banner from "./components/banner/banner";

function App() {
  return (
    <div className={classes.wrapper}>
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
