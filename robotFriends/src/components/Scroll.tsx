import { ReactNode } from "react"

interface ScrollProps {
    children: ReactNode; 
}

export const Scroll: React.FC<ScrollProps> = (props) => {

    return <>
        <div style={{
            overflowY: 'scroll',
            height: '470px'
        }}>
            {props.children}    
        </div>
    </>
} 