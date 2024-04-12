import { Footer, Header } from "./components";
import { Home, Character } from "./pages";
import { StyledApp, StyledMain } from "./styles/App.styles";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Header />
        <StyledMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="character/:id" element={<Character />} />
          </Routes>
        </StyledMain>
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
