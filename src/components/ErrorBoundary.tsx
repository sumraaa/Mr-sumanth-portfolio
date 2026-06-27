import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in 3D Component:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--accentColor)", opacity: 0.8, fontSize: "1.2rem", letterSpacing: "1px" }}>
          WebGL context crashed or failed to render.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
