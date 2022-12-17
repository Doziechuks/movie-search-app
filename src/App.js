import classes from "./App.module.css";

import NavBar from "./components/navBar/navBar";
import Banner from "./components/banner/banner";
import MovieCategory from "./components/movie/movieCategory";

function App() {
  return (
    <div className={classes.wrapper}>
      <NavBar />
      <Banner />
      <MovieCategory />
    </div>
  );
}

export default App;
