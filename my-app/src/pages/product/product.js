import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { BtnBack } from "../../components/button-back/button-back";
import { productsSelector } from "../../selectors/products-selector";
import styles from "./product.module.css";

export const Product = () => {
  const { id } = useParams();
  const canvasRef = useRef(null);
  const { products } = useSelector(productsSelector);

  let indexSelecteProduct = null;

  products.forEach(({ _id }, index) => {
    if (_id === id) {
      indexSelecteProduct = index;
    }
  });
  const product = products[indexSelecteProduct];

  useEffect(() => {
    const img = new Image();
    img.src = product.images[0];
    const canvas = canvasRef.current;
    canvas.width = img.width / 4;
    canvas.height = img.height / 4;
    const context = canvas.getContext("2d");
    context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      img.width / 4,
      img.height / 4
    );
  }, [product.images]);

  return (
    <div className={styles.wrapper}>
      <BtnBack />
      <div>
        <canvas className={styles.canvas} ref={canvasRef} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: product.bodyHtml }} />
    </div>
  );
};
