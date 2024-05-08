/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
// import { toast } from "react-toastify";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { useNavigate } from "react-router-dom";
import { isSupportedChain } from "@/constants/chain";
import { ZeroAddress, ethers } from "ethers";
import { getENSContract } from "@/constants/contracts";

const useRegisterUsers = (address: any, username: string) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const navigate = useNavigate();

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

    const contract = getENSContract(signer);

    const formattedName = ethers.encodeBytes32String(username);

    try {
      const transaction = await contract.createAccount(formattedName);

      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        navigate("/user");
        return toast.success("Username created successfully !", {
          position: "top-right",
        });
      }

      toast.error("Username creation failed !", {
        position: "top-right",
      });
    } catch (error: any) {
      navigate("/signup");
      toast.error(`${error.message.slice(0, 20)}...`, {
        position: "top-right",
      });
    }
  }, [address, username, chainId, walletProvider, navigate]);
};

export default useRegisterUsers;
