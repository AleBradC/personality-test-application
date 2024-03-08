import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { landingPageRoute, resultPage } from "./routes";
import Loading from "./components/Loading";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

const ResultPage = React.lazy(() => import("./pages/ResultPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={landingPageRoute} element={<LandingPage />} />
        <Route path={resultPage} element={<ResultPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
