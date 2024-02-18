import React from "react";
import { Route, Routes } from "react-router-dom";

import { landingPageRoute, takeTestPageRoute } from "./routes";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const TakeTestPage = React.lazy(() => import("./Pages/TakeTestPage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={landingPageRoute} element={<LandingPage />} />
      <Route path={takeTestPageRoute} element={<TakeTestPage />} />
    </Routes>
  );
};

export default App;
