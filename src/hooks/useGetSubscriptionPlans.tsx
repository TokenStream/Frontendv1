/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSubscriptionContract } from "@/constants/contracts";

const useGetSubscriptionPlans = () => {
    const [plans, setPlans] = useState([]);
    const [planCount, setPlanCount] = useState<number>(0);

    const fetchPlans = useCallback(async () => {
        try {
            const contract = getSubscriptionContract(readOnlyProvider);
            const res = await contract.getAllSubscriptionPlans();
            const converted = res.map((item: any, index: number) => ({
                id: index,
                name: item[0],
                fee: ethers.formatUnits(item[1], 18),
                isActive: item[2],
            }))
            setPlans(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingPlans = useCallback(() => {
        setPlanCount((prevValue) => prevValue + 1);
        fetchPlans();
    }, [fetchPlans]);


    useEffect(() => {
        fetchPlans();

        const plansfilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionPlanCreated(address,uint256,string)")
            ],
        };

        wssProvider.getLogs({ ...plansfilter, fromBlock: 5861694 }).then((events) => {
            setPlanCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(plansfilter, trackingPlans);

        return () => {
            // Perform cleanup
            provider.off(plansfilter, trackingPlans);

        };

    }, [fetchPlans, trackingPlans, planCount]);

    return plans;
}

export default useGetSubscriptionPlans