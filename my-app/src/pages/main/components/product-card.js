import { useNavigate } from "react-router-dom";
import styles from "./product-card.module.css";
import { useEffect, useRef } from "react";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = item.images[0];
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
  }, [item.images]);

  const getBodyHtml = () => {
    const partsHtml = item.bodyHtml.match(/.+?(?=<\/p>)/g);
    if (partsHtml[0].length > 100) {
      return partsHtml[0] + "</p>";
    } else {
      return partsHtml[0] + "</p>" + partsHtml[1] + "</p>";
    }
  };  

  return (
    <div
      className={styles.wrapper}
      onClick={() => navigate(`/product/${item._id}`)}
    >
      <canvas className={styles.canvas} ref={canvasRef} />
      <div dangerouslySetInnerHTML={{ __html: getBodyHtml() }} />
    </div>
  );
};
