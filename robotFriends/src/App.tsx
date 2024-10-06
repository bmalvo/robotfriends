import { Component } from "react"
import { CardArray } from "./CardArray"
import { robots } from "./robots"
import { SearchBox } from "./SearchBox"
import { Robot} from "./types"

interface AppState  {

    robots: Robot[];
    searchField: string;
}

export class App extends Component<object, AppState> {
    
    constructor(props:object) {

        super(props)
        this.state = {

          robots: robots,
          searchField: ''
        }
    }

    onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        this.setState({searchField: e.target.value})
    }

    render() {

        const filteredRobots = this.state.robots.filter((robot: Robot) =>
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))

        return <>
        <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange} />
        <CardArray robots={filteredRobots} filter={{
                    id: 0,
                    name: "",
                    username: undefined,
                    email: ""
                }} />
        </div>
    </>
    }
}