/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { getSalaryStreamContract } from "@/constants/contracts";

const usePauseUserMonthlyStreams = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(
        async (id: any) => {
            if (!isSupportedChain(chainId))
                return toast.error("Wrong network !", {
                    position: "top-right",
                });

            const readWriteProvider = getProvider(walletProvider);
            const signer = await readWriteProvider.getSigner();

            const contract = getSalaryStreamContract(signer);

            try {
                const transaction = await contract.pauseMonthlyStream(id);

                console.log("transaction: ", transaction);

                const receipt = await transaction.wait();

                console.log("receipt: ", receipt);

                if (receipt.status) {
                    return toast.success("User salary stream paused successfully !", {
                        position: "top-right",
                    });
                }

                toast.error("Pausing user salary stream failed !", {
                    position: "top-right",
                });
            } catch (error: any) {
                toast.error(`${error.message.slice(0, 20)}...`, {
                    position: "top-right",
                });
            }

        },
        [chainId, walletProvider]
    );
}

export default usePauseUserMonthlyStreams