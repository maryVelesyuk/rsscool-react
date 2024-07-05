import img from "../../assets/error.gif";
import './ErrorMessage.css'

const ErrorMessage = () => {
  return (
    <img
      src={img}
      alt="error"
      className="error"
    />
  );
};

export default ErrorMessage;