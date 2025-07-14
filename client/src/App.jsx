import "./styles/index.scss";

import { FormattedNumber, IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Checkout, Error } from "./routes";
import { Header, Title } from "./components";

function App() {
  return (
    <IntlProvider locale="en">
      <BrowserRouter>
        <Header />
        <main>
          <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
