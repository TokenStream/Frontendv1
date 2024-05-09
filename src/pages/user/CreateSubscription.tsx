/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import dstv from "../../assets/DStv.jpeg";
import netflix from "../../assets/netflix.webp"
import startlink from "../../assets/starlink.webp"
import spotify from "../../assets/spotify.avif"
import useGetSubscriptionPlans from "@/hooks/useGetSubscriptionPlans";
import useStartSubscription from "@/hooks/useStartSubscription";


const CreateSubscription = () => {

    const plans = useGetSubscriptionPlans();

    const handleSubmit = useStartSubscription();

    const handleStartSubscription = async (id: number) => {
        await handleSubmit(id);
    }

    const ImageArray = useMemo(() => [netflix, dstv, startlink, spotify], []);
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Subscription Setup</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col my-4 gap-3">
                <h3 className="md:text-xl text-lg text-gray-300 font-belanosima">Available Subscription Services</h3>
                <main className="w-full grid grid-cols-2 gap-8">
                    {
                        plans?.map((plan: any) => (
                            <section className="w-full flex flex-col gap-3 bg-gray-800 p-4 rounded-md" key={plan.id}>
                                <div className="w-full h-[200px] rounded-md overflow-hidden">
                                    <img src={ImageArray[plan.id]} alt="netflix" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Name: <span className="font-belanosima">{plan.name}</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Amount: <span className="font-belanosima">{plan.fee} OP</span></h3>
                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Duration: <span className="font-belanosima">Monthly</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Status: <span className="font-belanosima">{plan.isActive ? "Active" : "Deactivated"}</span></h3>
                                </div>

                                <Button disabled={!plan.isActive} onClick={() => handleStartSubscription(plan.id)} className="text-gray-100 text-base font-barlow px-4 py-2 bg-sky-500 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed">Start Subscription</Button>

                            </section>
                        ))
                    }

                </main>
            </section>
        </main>
    )
}

export default CreateSubscription
