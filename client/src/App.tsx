import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { landingPageRoute, takeTestPageRoute } from "./routes";
import Loading from "./components/Loading";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const TakeTestPage = React.lazy(() => import("./pages/TakeTestPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={landingPageRoute} element={<LandingPage />} />
        <Route path={takeTestPageRoute} element={<TakeTestPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
