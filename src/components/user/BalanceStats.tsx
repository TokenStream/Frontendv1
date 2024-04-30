import { BiMoneyWithdraw } from "react-icons/bi"
import { GiPayMoney } from "react-icons/gi"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useState } from "react"

const BalanceStats = () => {

    const [depositAmount, setDepositAmount] = useState(0)
    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [widthdrawReward, setWidthdrawReward] = useState(0)

    return (
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
                    <Dialog >
                        <DialogTrigger asChild>
                            <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-emerald-500 hover:bg-emerald-700">
                                <span>Deposit</span>
                                <GiPayMoney className="text-2xl" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                            <DialogHeader>
                                <DialogTitle className="text-gray-300 font-barlow text-lg">Deposit</DialogTitle>
                                <DialogDescription className="text-gray-500">
                                    Fund your account so as to be able to access all features.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid py-2">
                                <div className="relative w-full font-barlow">
                                    <label className="text-gray-300 text-sm ml-1 mb-1">Enter Amount of Token</label>
                                    <input
                                        type="number"
                                        name={"amount"}
                                        id={"amount"}
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(Number(e.target.value))}
                                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-11"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={depositAmount <= 0 && true} type="submit" className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed">Deposit</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Dialog >
                        <DialogTrigger asChild>
                            <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-sky-700">
                                <span>Withdraw</span>
                                <BiMoneyWithdraw className="text-2xl" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                            <DialogHeader>
                                <DialogTitle className="text-gray-300 font-barlow text-lg">Withdraw</DialogTitle>
                                <DialogDescription className="text-gray-500">
                                    You can always withdraw your funds. However, your funds enables to access all features.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid py-2">
                                <div className="relative w-full font-barlow">
                                    <label className="text-gray-300 text-sm ml-1 mb-1">Enter Amount of Token</label>
                                    <input
                                        type="number"
                                        name={"amount"}
                                        id={"amount"}
                                        value={withdrawAmount}
                                        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-11"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={withdrawAmount <= 0 && true} type="submit" className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed">Withdraw</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Total Reward</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">5.00 <span>TR</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per TR (TRiver Token)</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">0.05 <span>USD</span></h1>
                </div>
                <div className="w-full grid">

                    <Dialog >
                        <DialogTrigger asChild>
                            <Button className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-sky-700">
                                <span>Withdraw</span>
                                <BiMoneyWithdraw className="text-2xl" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                            <DialogHeader>
                                <DialogTitle className="text-gray-300 font-barlow text-lg">Withdraw Rewards</DialogTitle>
                                <DialogDescription className="text-gray-500">
                                    You can always withdraw your funds. However, your funds enables to access all features.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid py-2">
                                <div className="relative w-full font-barlow">
                                    <label className="text-gray-300 text-sm ml-1 mb-1">Enter Amount of Token</label>
                                    <input
                                        type="number"
                                        name={"amount"}
                                        id={"amount"}
                                        value={widthdrawReward}
                                        onChange={(e) => setWidthdrawReward(Number(e.target.value))}
                                        className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-11"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={widthdrawReward <= 0 && true} type="submit" className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed">Withdraw Rewards</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    )
}

export default BalanceStats