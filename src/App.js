import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage";
import Protected from "./components/Protected";
import EventForm from "./pages/EventForm";
import JoinEvent from "./pages/JoinEvent";
import Hackpage from "./pages/HackThe6ix";
import MatchChat from "./pages/MatchesChat";

function App() {
  return (
    <>
    <div className="web-header"></div>
      <BrowserRouter>
        <AuthContextProvider >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/homepage" element={<Protected ><Homepage /></Protected>} />
            <Route path="/createevent" element={<EventForm />} />
            {/* <Route path="/joinevent" element={<JoinEvent />} /> */}
            <Route path="/Hackthe6ix" element={<Hackpage />} />
            <Route path="/matcheschat" element={<MatchChat />} />
          </Routes>
        </AuthContextProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
