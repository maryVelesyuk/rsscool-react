import img from "../../../assets/error.gif";
import "./ErrorMessage.css";

export const ErrorMessage = () => {
  return (
    <div className="error-wrapper">
      <p>Something went wrong!</p>
      <img src={img} alt="error" className="error" />
    </div>
  );
};
