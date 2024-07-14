import { FC } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pagesCount: number;
  selectedPage: number;
  onSelectedPageClick: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  pagesCount,
  selectedPage,
  onSelectedPageClick,
}) => {
  const numbersArr = [...Array(pagesCount).keys()].map((item) => item + 1);

  return (
    <div className={styles.wrapper}>
      {numbersArr.map((item) => (
        <div
          className={selectedPage === item ? styles.active : styles.regular}
          key={item}
          onClick={() => onSelectedPageClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
