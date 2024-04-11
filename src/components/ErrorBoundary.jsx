import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error capturado:", error, errorInfo);
    // Aquí puedes enviar el error a un servicio de registro de errores
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.errorMessage}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;