import { Robot } from "../types"

export const Card = ({ id, name, email}: Robot) => {

    return <>
        <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <div>
                <img src={`https://robohash.org/${id}?200x200?`} alt="pic of robot" />
        </div>
        <div>
                <h2>{ name}</h2>
                <p>{email}</p>
        </div>
        </div>
    </>
}