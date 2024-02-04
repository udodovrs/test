import { useEffect, useState } from "react";
import { request } from "../../utils/request";
import { ProductCard } from "./components/product-card";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPE } from "../../constants/action-type";
import { productsSelector } from "../../selectors/products-selector";
import styles from "./main.module.css";
import { setProductsSessionStorage } from "../../utils/set-product-to-sessionstarage";

export const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);

  useEffect(() => {
    setIsLoaded(true);

    request("/products").then(({ error, data }) => {
      if (error) {
        console.error("Ошибка получения списка товаров");
      }

      dispatch({
        type: ACTION_TYPE.SET_PRODUCTS,
        payload: data,
      });
    });

    setProductsSessionStorage()

    setIsLoaded(false);
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {isLoaded
        ? "Загрука товаров..."
        : products.length === 0
        ? "Товары не найдены"
        : products.map((item, index) => (
            <ProductCard key={item._id} item={item} />
          ))}
    </div>
  );
};
