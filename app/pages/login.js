import { useEffect } from "react";
import { useUser } from "../context/user";

const Login = () => {
    const { login } = useUser();
    useEffect(() => {
        async function doLogin() {
            await login();
        }

        doLogin();
    }, []);

    return <p>Logging in</p>
}

export default Login;