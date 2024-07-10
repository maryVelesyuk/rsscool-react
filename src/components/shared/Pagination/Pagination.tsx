import { FC, useState } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pagesCount: number;
}

export const Pagination: FC<PaginationProps> = ({ pagesCount }) => {
  const [active, setActive] = useState<number>(1);
  const numbersArr = [...Array(pagesCount).keys()].map((item) => item + 1);

  const onClick = (item: number) => {
    setActive(item);
  };

  return (
    <div className={styles.wrapper}>
      {numbersArr.map((item) => (
        <div
          className={active === item ? styles.active : styles.regular}
          key={item}
          onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
