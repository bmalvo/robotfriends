import { ReactNode, useEffect, useState } from "react";
// Need improvement!!!
interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundry = ({ children }: ErrorBoundaryProps) => {

    
    const [hasError] = useState(false);
    const [error] = useState(null);
    const [errorInfo] = useState(null);


    useEffect(() => {
        if (error) {
            console.error(error, errorInfo);
        }
    }, [error, errorInfo]);
    
    if (hasError) {

        return <h1>Something went wrong.</h1>;
    }
    
    return children
};


export { ErrorBoundry }
