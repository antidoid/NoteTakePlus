import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AuthSelection, Home, Login, Signup, Welcome } from "./pages";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="auth">
        <Route index element={<AuthSelection />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="home" element={<Home />} />
    </Route>,
  ),
  { basename: import.meta.env.DEV ? "/" : "/NoteTakePlus/" },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
