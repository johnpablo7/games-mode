import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Home } from "../components/pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
