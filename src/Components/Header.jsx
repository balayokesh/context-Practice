import { useContext } from "react";

import { UserContext } from "../Contexts/UserContext";

export default function Header() {

    const user = useContext(UserContext);

    return (
        <>
            <h2>App Name</h2>
            <p>
                {
                    (user) 
                    ?
                    <>
                        Hello {user}
                        <button>Logout</button>
                    </>
                    :
                    <button>Login</button>
                }
            </p>
        </>
    )
}