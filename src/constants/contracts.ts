import { ethers } from "ethers";
import ENSContractABI from "./ABI/ENSContractABI.json";

export const getENSContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
    ENSContractABI,
    providerOrSigner
  );
};
