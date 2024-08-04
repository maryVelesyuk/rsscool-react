import { MainPage } from "../../../components/pages/MainPage";
import styles from "./loading.module.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className={styles.wrapper}>
        <MainPage />
      </div>
    </>
  );
}
