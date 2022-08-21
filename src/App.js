import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage";
import Protected from "./components/Protected";
import EventForm from "./pages/EventForm";

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
          </Routes>
        </AuthContextProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
