import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { createContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const AppContext = createContext({});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const { isConnected } = useWeb3ModalAccount();
    const navigate = useNavigate();

    const change = useCallback(async () => {
        if (isConnected) {
            navigate("/signup");
        } else if (!isConnected) {
            navigate("/");
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);

    return <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
}