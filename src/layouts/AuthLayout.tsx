import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Navigate, Outlet } from "react-router-dom";
import { ZeroAddress } from "ethers";

const AuthLayout = () => {
    const { isConnected, address } = useWeb3ModalAccount();

    if (isConnected) {
        if (address !== ZeroAddress) {
            return <Navigate to="/user" />
        } else {
            return <Outlet />
        }
    } else {
        return <Navigate to="/" />
    }

    // return isConnected ? <Outlet /> : <Navigate to="/user" />;
}

export default AuthLayout