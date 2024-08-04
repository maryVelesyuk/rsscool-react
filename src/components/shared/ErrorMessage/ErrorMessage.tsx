import Image from "next/image";
import "./ErrorMessage.css";

export const ErrorMessage = () => {
  return (
    <div className="error-wrapper" data-testid="errorMessage">
      <p>Something went wrong!</p>
      <Image
        src={`/error.png`}
        alt="Error"
        width={350}
        height={350}
        objectFit="contain"
      />
    </div>
  );
};
