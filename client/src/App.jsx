import "./styles/index.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Checkout, Error } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h6 className="center">HALLO WORLD</h6>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
