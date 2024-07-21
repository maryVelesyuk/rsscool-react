import { FC } from "react";
import styles from "./Modal.module.css";
import { Button, DownloadCSV } from "..";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { unselectAll } from "../../../redux/slices/selectedPlanets";

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
    <div className={styles.wrapper}>
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
          <DownloadCSV data={planetsInfo} fileName="planets-info" />
          {/* <Button type="primary" onClick={handleDownload} text="Download" /> */}
        </div>
      </div>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
    </div>
  );
};
