import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../layout/AppLayout";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Pages */}
        <Route index element={<HomePage />} />

        {/* Error Page */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
