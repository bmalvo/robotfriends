import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export class ErrorBoundry extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {

        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({ hasError: true })
        console.log(error, errorInfo);
    }

    render() {
        
        if (this.state.hasError) {
            
            return <h1>Oooops... Something goes wrong.</h1>
        }
        return this.props.children
    }
}