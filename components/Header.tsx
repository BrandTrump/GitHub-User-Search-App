import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.heading_container}>
      <h1>devfinder</h1>
      <div className={styles.darkmode}>
        <h3>LIGHT</h3>
      </div>
    </header>
  );
}

export default Header;
