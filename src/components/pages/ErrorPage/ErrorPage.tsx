import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className={styles.wrapper}>
          <p>Error 404</p>
          <p>This page doesn't exist!</p>
        </div>
      );
    }

    return (
      <div className={styles.wrapper}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );
  }
};
