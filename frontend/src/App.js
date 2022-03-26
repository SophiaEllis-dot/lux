import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Construction, Signup, SignIn, GetStarted, LangingPage } from "./routes";
import { AnimatePresence } from "framer-motion";

function App() {
  const Location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={Location} key={Location.key}>
        <Route exact path="/" element={<Construction />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/getstarted" element={<GetStarted />} />
        <Route exact path= "/LandingPage" element={<LangingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
