import "./styles/index.scss";

import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkout } from "./routes";
import { Header, Title } from "./components";
import { CartProvider } from "./store/CartProvider";

function App() {
  return (
    <IntlProvider locale="en">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Title />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </IntlProvider>
  );
}

export default App;
