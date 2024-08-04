import { FC } from "react";
import styles from "./Modal.module.css";
import { Button, DownloadCSV } from "..";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { unselectAll } from "../../../lib/features/selectedPlanets";

interface ModalProps {
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { planetsName, planetsInfo } = useAppSelector(
    (state) => state.selectedPlanets
  );
  const count = planetsName.length;

  const handleUnselectAll = () => {
    dispatch(unselectAll());
  };

  return (
    <div className={styles.wrapper} data-testid="modal">
      <div className={styles.content}>
        <p>
          {count} {count === 1 ? "item is" : "items are"} selected
        </p>
        <div className={styles.btnSection}>
          <Button
            type="primary"
            onClick={handleUnselectAll}
            text="Unselect all"
          />
          <DownloadCSV
            data={planetsInfo}
            fileName={`${count}_${count === 1 ? "planet" : "planets"}`}
          />
        </div>
      </div>
      <button data-testid="close" className={styles.closeBtn} onClick={onClose}>
        X
      </button>
    </div>
  );
};
