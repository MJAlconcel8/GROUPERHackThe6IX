import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider >
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </AuthContextProvider >
      </BrowserRouter>
    </>
  );
}

export default App;
