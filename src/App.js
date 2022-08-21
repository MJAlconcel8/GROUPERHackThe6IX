import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";
import Homepage from "./pages/Homepage";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/homepage" element={<Protected ><Homepage /></Protected>} />
          </Routes>
        </AuthContextProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
