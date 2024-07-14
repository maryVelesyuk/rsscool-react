import { Component } from "react";
import img from "../../../assets/error.gif";
import "./ErrorMessage.css";

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-wrapper">
        <p>Something went wrong!</p>
        <img src={img} alt="error" className="error" />
      </div>
    );
  }
}
