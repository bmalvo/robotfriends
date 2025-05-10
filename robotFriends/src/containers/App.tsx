import { useEffect, useState } from "react"
import { CardArray } from "../components/CardArray"
import { SearchBox } from "../components/SearchBox"
import { Robot } from "../types"
import './App.css'
import { Scroll } from "../components/Scroll"
import { ErrorBoundry } from "../components/ErrorBoundry"


const App = () => {
    
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearchField(e.target.value)
    };


    const filteredRobots = robots.filter((robot: Robot) =>
        robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return !robots ? <h1>Loading...</h1> :
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
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
};
    
export { App }
