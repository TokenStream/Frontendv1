/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSalaryStreamContract } from "@/constants/contracts";

const useGetUserSalaryStream = (address: any) => {
    const [data, setData] = useState([]);
    const [streamCount, setStreamCount] = useState<number>(0);

    const fetchUserSalaryStreams = useCallback(async () => {
        try {
            const contract = getSalaryStreamContract(readOnlyProvider);
            const res = await contract.getStreamsByOwner(address);
            const converted = res.map((item: any) => ({
                id: Number(item[0]),
                recipient: item[1],
                amount: ethers.formatUnits(item[2], 18),
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
    }, [address]);

    const trackingSalaryStreamCreated = useCallback(() => {
        setStreamCount((prevValue) => prevValue + 1);
        fetchUserSalaryStreams();
    }, [fetchUserSalaryStreams]);


    useEffect(() => {
        fetchUserSalaryStreams();

        const filter = {
            address: import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
            topics: [ethers.id("StreamCreated(uint256,address,IntervalType)")],
        };

        wssProvider.getLogs({ ...filter, fromBlock: 5850139 }).then((events) => {
            setStreamCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(filter, trackingSalaryStreamCreated);

        return () => {
            // Perform cleanup
            provider.off(filter, trackingSalaryStreamCreated);
        };

    }, [fetchUserSalaryStreams, trackingSalaryStreamCreated, streamCount]);

    return data;
}

export default useGetUserSalaryStream