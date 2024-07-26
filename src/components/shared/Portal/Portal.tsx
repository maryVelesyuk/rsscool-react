import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal";
import { useAppSelector } from "../../../redux/hooks";

export const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  const { planetsName } = useAppSelector((state) => state.selectedPlanets);

  const onClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!planetsName.length) {
      setShowModal(false);
    }
    if (planetsName.length) setShowModal(true);
    const timeoutId = setTimeout(() => setShowModal(false), 4000);
    return () => clearTimeout(timeoutId);
  }, [planetsName]);

  return (
    <>{showModal && createPortal(<Modal onClose={onClose} />, document.body)}</>
  );
};
