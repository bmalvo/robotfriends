import './Hello.css'

type Greetings = {
    
    greetings: string;
}

export const Hello = (props: Greetings) => { 
        
        return <>
            <h1 className="dim">Hello world!</h1>
            <p>Welcome to React {props.greetings}</p>
        </>
    }