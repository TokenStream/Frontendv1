

const BalanceStats = () => {


    return (
        <section className="w-full grid  gap-4">
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Contract Total Balance</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">36,769.00 <span>OP</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per OP</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">10.05 <span>USD</span></h1>
                </div>
            </div>
            {/* <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Reward Balance</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">5.00 <span>TR</span></h1>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">Price per TR (TRiver Token)</h4>
                    <h1 className="text-gray-400 text-xl font-barlow">0.05 <span>USD</span></h1>
                </div>
            </div> */}
        </section>
    )
}

export default BalanceStats