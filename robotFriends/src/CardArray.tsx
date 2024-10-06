import { Card } from "./Card"
import { RobotsArray } from "./types"

export const CardArray = ({ robots }: RobotsArray) => {

    return <>
        {robots.map(robot => 
            <Card
                key={robot.id}
                id={robot.id}
                name={robot.email}
                email={robot.email} />
        )}
    </>
}