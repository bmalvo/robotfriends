import { Component } from "react";
import './Hello.css'

type Greetings = {
    
    greetings: string;
}

export class Hello extends Component<Greetings> {

    render() {
        
        return <>
            <h1 className="dim">Hello world!</h1>
            <p>Welcome to React {this.props.greetings}</p>
        </>
    }
}