import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Home } from "../components/pages/store/Home";
import { Store } from "../components/pages/store/Store";
import { Library } from "../components/pages/store/Library";
import { Friends } from "../components/pages/store/Friends";
import { Live } from "../components/pages/store/Live";
import { NotFound } from "../components/pages/NotFound";
import { Downloads } from "../components/pages/store/Downloads";
import { Settings } from "../components/pages/store/Settings";
import { Perfil } from "../components/pages/store/Perfil";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/library" element={<Library />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/live" element={<Live />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};