export type Robot = {
     id: number;
    name: string;
    username?: string;
    email: string;
}

export type RobotsArray = {
    filter: Robot;
    robots : Robot[]
}