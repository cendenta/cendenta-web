import { useEffect } from "react";
import { useUser } from "../context/user";

const Logout = () => {
    const { logout } = useUser();
    useEffect(() => {
        async function doLogout() {
            await logout();
        }
    
        doLogout();
    }, []);

    return <p>Logging out</p>;
}

export default Logout;