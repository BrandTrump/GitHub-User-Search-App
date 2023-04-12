import styles from "../styles/Header.module.scss";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header className={styles.heading_container}>
      <h1>devfinder</h1>
      <div className={styles.darkmode}>
        <DarkModeButton />
      </div>
    </header>
  );
}

export default Header;
