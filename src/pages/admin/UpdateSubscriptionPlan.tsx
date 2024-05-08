/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import dstv from "../../assets/DStv.jpeg";
import netflix from "../../assets/netflix.webp"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../../components/ui/dialog";
import { useState } from "react";
import useGetSubscriptionPlans from "@/hooks/useGetSubscriptionPlans";

const UpdateSubscriptionPlan = () => {

    const [planName, setPlanName] = useState("");
    const [planFee, setPlanFee] = useState(0);

    const plans = useGetSubscriptionPlans();

    // const handleSubmit = useUpdateSubscriptionPlan(planName, planFee);

    const handleSubmit = async () => {
        console.log("Updated Plan Name:", planName);
        console.log("Updated Plan Fee:", planFee);
        // await handleSubmit();
        setPlanName("")
        setPlanFee(0)
    }

    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Update Subscription Plan</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col my-4 gap-3">
                <h3 className="md:text-xl text-lg text-gray-300 font-belanosima">Available Subscription Services</h3>
                <main className="w-full grid grid-cols-2 gap-8">
                    {
                        plans?.map((plan: any) => (
                            <section className="w-full flex flex-col gap-3 bg-gray-800 p-4 rounded-md" key={plan.id}>
                                <div className="w-full h-[200px] rounded-md overflow-hidden">
                                    {plan.name === "DSTV" ? <img src={dstv} alt="DStv" className="w-full h-full object-cover" /> : <img src={netflix} alt="netflix" className="w-full h-full object-cover" />}

                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Name: <span className="font-belanosima">{plan.name}</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Amount: <span className="font-belanosima">{plan.fee} OP</span></h3>
                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Duration: <span className="font-belanosima">1 Month</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Status: <span className="font-belanosima">{plan.isActive ? "Active" : "Deactivated"}</span></h3>
                                </div>

                                <Dialog >
                                    <DialogTrigger asChild>
                                        <Button className="text-gray-100 text-base font-barlow px-4 py-2 bg-sky-500 hover:bg-emerald-500">Edit Plan</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                                        <DialogHeader>
                                            <DialogTitle className="text-gray-300 font-barlow text-lg">Update {plan.name} Plan</DialogTitle>
                                            <DialogDescription className="text-gray-500">
                                                Update the subscription plan details.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <main className="w-full grid gap-8">
                                            <div className="relative w-full font-barlow">
                                                <label className="text-gray-300 ml-1 mb-1">Plan Name</label>
                                                <input
                                                    type="text"
                                                    name={"planName"}
                                                    id={"planName"}
                                                    value={plan.name}
                                                    onChange={(e) => setPlanName(e.target.value)}
                                                    className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                />

                                            </div>

                                            <div className="relative w-full font-barlow">
                                                <label className="text-gray-300 ml-1 mb-1">Plan Fee</label>
                                                <input
                                                    type="number"
                                                    name={"planFee"}
                                                    id={"planFee"}
                                                    value={plan.fee}
                                                    onChange={(e) => setPlanFee(Number(e.target.value))}
                                                    className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                />
                                            </div>
                                        </main>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button type="button" onClick={handleSubmit} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed">Update</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </section>
                        ))
                    }



                </main>
            </section>

        </main>
    )
}

export default UpdateSubscriptionPlan