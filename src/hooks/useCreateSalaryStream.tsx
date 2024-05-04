/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { ZeroAddress } from "ethers";
import { getSalaryStreamContract } from "@/constants/contracts";

const useCreateSalaryStream = (address: any, csvData: any, streamInterval: string) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();


    return useCallback(async () => {
        if (!isSupportedChain(chainId))
            return toast.error("Wrong network !", {
                position: "top-right",
            });

        if (address === ZeroAddress || !walletProvider)
            return toast.error("Please connect your wallet !", {
                position: "top-right",
            });

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getSalaryStreamContract(signer);

        try {
            let interval;
            if (streamInterval === "daily") {
                interval = 1;
            } else if (streamInterval === "monthly") {
                interval = 2;
            }

            const transaction = await contract.createStream(csvData, interval);

            console.log("transaction: ", transaction);

            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return toast.success("Salary stream created successfully !", {
                    position: "top-right",
                });
            }

            toast.error("Salary stream creation failed !", {
                position: "top-right",
            });
        } catch (error: any) {
            toast.error(`${error.message.slice(0, 20)}...`, {
                position: "top-right",
            });
        }
    }, [address, csvData, streamInterval, chainId, walletProvider]);
}

export default useCreateSalaryStream