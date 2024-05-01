import { useCheckRegisteredUser } from "@/hooks/useCheckRegisteredUser"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"



const User = () => {
    const { address } = useWeb3ModalAccount()
    useCheckRegisteredUser(address)
    return (
        <main className="w-full h-full flex flex-col">

        </main>
    )
}

export default User