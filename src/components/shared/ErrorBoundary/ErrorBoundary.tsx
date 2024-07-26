import { Component, ReactNode } from "react";
import { ErrorMessage } from "../ErrorMessage";

interface ErrorBoundaryProps {
  children: ReactNode;
}

type ErrorBoundaryState = {
  error: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

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
