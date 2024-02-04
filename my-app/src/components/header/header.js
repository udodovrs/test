import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>Тестовое задание на позицию Junior Full-stack Developer CPB</div>
      </div>
    </header>
  );
};
