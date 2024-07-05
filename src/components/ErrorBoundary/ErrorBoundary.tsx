import { Component, ReactNode } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type ErrorBoundaryState = {
  error: boolean;
}

class ErrorBoundary extends Component<{children: ReactNode}, ErrorBoundaryState> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error) {
    console.log(error);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;