import { FC } from "react";
import styles from "./Pagination.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPage } from "../../../redux/slices/selectedPage";

interface PaginationProps {
  planetsCount: number | undefined;
}

export const Pagination: FC<PaginationProps> = ({ planetsCount = 1 }) => {
  const numbersArr = [...Array(Math.ceil(planetsCount / 10)).keys()].map(
    (item) => item + 1
  );
  const dispatch = useAppDispatch();
  const { selectedPage } = useAppSelector((state) => state.selectedPage);

  const onSelectedPageClick = (page: number) => {
    dispatch(setPage(page));
  };

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
