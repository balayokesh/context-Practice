import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

export default function Children () {

    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    return (
        <>
            {isLoggedIn}
            <button onClick={() => setIsLoggedIn('true')}>Login</button>
        </>
    )
}