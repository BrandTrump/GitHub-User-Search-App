import styles from "@/app/page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.search_cta}>Find any GitHub user!</h1>
    </div>
  );
}
