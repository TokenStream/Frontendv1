import { Button } from "@/components/ui/button"
import { BiMoneyWithdraw } from "react-icons/bi"
import { GiPayMoney } from "react-icons/gi"


const User = () => {
    return (
        <main className="w-full h-full flex flex-col">
            <section className="w-full grid md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-5 md:col-span-2 bg-gray-800 rounded-lg p-6">
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">Total Balance</h4>
                        <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">36,769.00 <span>OP</span></h1>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">Price per OP</h4>
                        <h1 className="text-gray-400 text-xl font-barlow">10.05 <span>USD</span></h1>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-emerald-500 hover:bg-emerald-700">
                            <span>Deposit</span>
                            <GiPayMoney className="text-2xl" />
                        </Button>
                        <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-sky-700">
                            <span>Withdraw</span>
                            <BiMoneyWithdraw className="text-2xl" />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">Total Reward</h4>
                        <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">5.00 <span>SF</span></h1>
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <h4 className="text-gray-300 font-barlow">Price per SF (Stream Flow Token)</h4>
                        <h1 className="text-gray-400 text-xl font-barlow">0.05 <span>USD</span></h1>
                    </div>
                    <div className="w-full grid">
                        <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-sky-700">
                            <span>Withdraw</span>
                            <BiMoneyWithdraw className="text-2xl" />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default User