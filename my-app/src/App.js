import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Main } from "./pages/main/main";
import { Product } from "./pages/product/product";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.wrapperContent}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
