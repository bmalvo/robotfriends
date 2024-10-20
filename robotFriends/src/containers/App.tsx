import { Component } from "react"
import { CardArray } from "../components/CardArray"
// import { robots } from "./robots"
import { SearchBox } from "../components/SearchBox"
import { Robot } from "../types"
import './App.css'
import { Scroll } from "../components/Scroll"
import { ErrorBoundry } from "../components/ErrorBoundry"

interface AppState  {

    robots: Robot[];
    searchField: string;
}

export class App extends Component<object, AppState> {
    
    constructor(props:object) {

        super(props)
        this.state = {

          robots: [],
          searchField: ''
        }
    }

    componentDidMount(): void {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({searchField: e.target.value})
    }

    render() {

        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter((robot: Robot) =>
            robot.name.toLowerCase().includes(searchField.toLowerCase()));

        return !robots ? <h1>Loading...</h1> :
          <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardArray robots={filteredRobots} filter={{
                  id: 0,
                  name: "",
                  username: undefined,
                  email: ""
              }} />
            </ErrorBoundry>          
        </Scroll>
        </div>
    }
}