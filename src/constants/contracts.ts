import { ethers } from "ethers";
import ENSContractABI from "./ABI/ENSContractABI.json";
import ModaContractABI from "./ABI/ModaContractABI.json";

export const getENSContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
    ENSContractABI,
    providerOrSigner
  );
};

export const getModalContract = (
  providerOrSigner: ethers.Provider | ethers.Signer
) => {
  return new ethers.Contract(
    import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
    ModaContractABI,
    providerOrSigner
  );
};
