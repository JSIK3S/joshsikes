import { useEffect } from "react";
import { setFavicon } from "./utils/setFavicon";
import { Route, Routes } from "react-router-dom";
import { TitlePage } from "./pages/TitlePage";
import { AboutMePage } from "./pages/AboutMePage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import { SkillsPage } from "./pages/SkillsPage";

function App() {
  // loads or updates favicon on page load
  useEffect(() => {
    setFavicon();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="" Component={TitlePage} />
        <Route path="/about" Component={AboutMePage} />
        <Route path="/recommends" Component={RecommendationsPage} />
        <Route path="/skills" Component={SkillsPage} />
      </Routes>
    </div>
  );
}

export default App;
