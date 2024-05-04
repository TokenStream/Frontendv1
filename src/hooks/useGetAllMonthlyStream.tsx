/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSalaryStreamContract } from "@/constants/contracts";

const useGetAllMonthlyStream = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState<number>(0);


    const fetchMonthly = useCallback(async () => {
        try {
            const contract = getSalaryStreamContract(readOnlyProvider);
            const res = await contract.getAllMonthlyStreams();
            const converted = res.map((item: any) => ({
                id: Number(item[0]),
                recipient: item[1],
                amount: Number(item[2]),
                lastPayment: item[3],
                startTime: item[4],
                intervalType: Number(item[5]),
                isactive: item[6],
                streamer: item[7],
            }));
            setData(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingUsers = useCallback(() => {
        setCount((prevValue) => prevValue + 1);
        fetchMonthly();
    }, [fetchMonthly]);


    useEffect(() => {
        fetchMonthly();

        const filter = {
            address: import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
            topics: [ethers.id("StreamCreated(uint256,address,IntervalType)")],
        };

        wssProvider.getLogs({ ...filter, fromBlock: 5834234 }).then((events) => {
            setCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(filter, trackingUsers);

        return () => {
            // Perform cleanup
            provider.off(filter, trackingUsers);
        };

    }, [fetchMonthly, trackingUsers, count]);

    return data;
}

export default useGetAllMonthlyStream