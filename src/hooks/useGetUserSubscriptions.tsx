/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSubscriptionContract } from "@/constants/contracts";

const useGetUserSubscriptions = (address: any) => {
    const [data, setData] = useState([]);
    const [subsCount, setSubsCount] = useState<number>(0);
    const [subsPausedCount, setSubsPausedCount] = useState<number>(0);
    const [subsResumedCount, setSubsResumedCount] = useState<number>(0);

    const fetchUserSubscriptions = useCallback(async () => {
        try {
            const contract = getSubscriptionContract(readOnlyProvider);
            const res = await contract.getSubscriptionsOfAddress(address);
            const converted = res.map((item: any) => ({
                status: item[0],
                planName: item[1],
                planFee: ethers.formatUnits(item[2], 18),
                planStreamer: item[3],
                planId: Number(item[4]),
            }));
            setData(converted);
        } catch (error) {
            console.error(error);
        }
    }, [address]);

    const trackingSubsCreated = useCallback(() => {
        setSubsCount((prevValue) => prevValue + 1);
        fetchUserSubscriptions();
    }, [fetchUserSubscriptions]);


    const trackingSubsPaused = useCallback(() => {
        setSubsPausedCount((prevValue) => prevValue + 1);
        fetchUserSubscriptions();
    }, [fetchUserSubscriptions]);

    const trackingSubsResumed = useCallback(() => {
        setSubsResumedCount((prevValue) => prevValue + 1);
        fetchUserSubscriptions();
    }, [fetchUserSubscriptions]);

    setTimeout(() => {
        fetchUserSubscriptions();
    }, 3000)


    useEffect(() => {
        fetchUserSubscriptions();

        const subCreatedFilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [ethers.id("SubscriptionStarted(address,uint256)")],
        };

        wssProvider.getLogs({ ...subCreatedFilter, fromBlock: 5931584 }).then((events) => {
            setSubsCount(events.length + 1);
        });

        const subPausedFilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [ethers.id("SubscriptionPaused(address,uint256)")],
        };

        wssProvider.getLogs({ ...subPausedFilter, fromBlock: 5931584 }).then((events) => {
            setSubsPausedCount(events.length + 1);
        });

        const subResumedFilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [ethers.id("SubscriptionResumed(address,uint256)")],
        };

        wssProvider.getLogs({ ...subResumedFilter, fromBlock: 5931584 }).then((events) => {
            setSubsResumedCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(subCreatedFilter, trackingSubsCreated);

        provider.on(subPausedFilter, trackingSubsPaused);

        provider.on(subResumedFilter, trackingSubsResumed);

        return () => {
            // Perform cleanup
            provider.off(subCreatedFilter, trackingSubsCreated);
            provider.off(subPausedFilter, trackingSubsPaused);
            provider.off(subResumedFilter, trackingSubsResumed);
        };

    }, [trackingSubsCreated, trackingSubsPaused, trackingSubsResumed, fetchUserSubscriptions, subsCount, subsPausedCount, subsResumedCount]);

    return data;
}

export default useGetUserSubscriptions