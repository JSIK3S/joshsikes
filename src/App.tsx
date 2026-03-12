import { useEffect } from "react";
import { setFavicon } from "./utils/setFavicon";
import { Route, Routes } from "react-router-dom";
import { AboutMePage, HomePage, RecommendationsPage } from "./pages";

function App() {
  // loads or updates favicon on page load
  useEffect(() => {
    setFavicon();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="" Component={HomePage} />
        <Route path="/about" Component={AboutMePage} />
        <Route path="/recommends" Component={RecommendationsPage} />
      </Routes>
    </div>
  );
}

export default App;
