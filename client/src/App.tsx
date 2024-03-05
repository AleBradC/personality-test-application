import React from "react";
import { Route, Routes } from "react-router-dom";

import { landingPageRoute, takeTestPageRoute } from "./routes";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const TakeTestPage = React.lazy(() => import("./pages/TakeTestPage"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={landingPageRoute} element={<LandingPage />} />
      <Route path={takeTestPageRoute} element={<TakeTestPage />} />
    </Routes>
  );
};

export default App;
