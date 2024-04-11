import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { IndexPage } from "./pages/Index";
import { LoginPage } from "./pages/Login";
import { JoinPage } from "./pages/Join";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IndexPage />} index />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/notes" element={<IndexPage />} />
    </>
  )
);
