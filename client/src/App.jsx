import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SuspenseFallback from "./components/fallback";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/home"));
const Chat = lazy(() => import("./pages/chat"));
const Profile = lazy(() => import("./pages/profile"));
const Products = lazy(() => import("./pages/products"));

function App() {
  return (
    <main>
      <Navbar />

      <Suspense fallback={<SuspenseFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
