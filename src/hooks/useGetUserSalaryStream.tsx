/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSalaryStreamContract } from "@/constants/contracts";

const useGetUserSalaryStream = (address: any) => {
    const [data, setData] = useState([]);
    const [streamCount, setStreamCount] = useState<number>(0);
    const [streamPausedCount, setStreamPausedCount] = useState<number>(0);
    const [streamResumedCount, setStreamResumedCount] = useState<number>(0);

    const fetchUserSalaryStreams = useCallback(async () => {
        console.log(streamCount, streamPausedCount, streamResumedCount);
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
    }, [address, streamCount, streamPausedCount, streamResumedCount]);

    const trackingSalaryStreamCreated = useCallback(() => {
        setStreamCount((prevValue) => prevValue + 1);
        fetchUserSalaryStreams();
    }, [fetchUserSalaryStreams]);


    const trackingSalaryStreamPaused = useCallback(() => {
        setStreamPausedCount((prevValue) => prevValue + 1);
        fetchUserSalaryStreams();
    }, [fetchUserSalaryStreams]);

    const trackingSalaryStreamResumed = useCallback(() => {
        setStreamResumedCount((prevValue) => prevValue + 1);
        fetchUserSalaryStreams();
    }, [fetchUserSalaryStreams]);


    useEffect(() => {
        fetchUserSalaryStreams();

        const streamCreatedFilter = {
            address: import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
            topics: [ethers.id("StreamCreated(uint256,address,IntervalType)")],
        };

        wssProvider.getLogs({ ...streamCreatedFilter, fromBlock: 5854745 }).then((events) => {
            setStreamCount(events.length + 1);
        });

        const streamPausedFilter = {
            address: import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
            topics: [ethers.id("StreamPaused(address,IntervalType)")],
        };

        wssProvider.getLogs({ ...streamPausedFilter, fromBlock: 5854745 }).then((events) => {
            setStreamPausedCount(events.length + 1);
        });

        const streamResumedFilter = {
            address: import.meta.env.VITE_SALARY_STREAMING_ADDRESS,
            topics: [ethers.id("StreamResumed(address,IntervalType)")],
        };

        wssProvider.getLogs({ ...streamResumedFilter, fromBlock: 5854745 }).then((events) => {
            setStreamResumedCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(streamCreatedFilter, trackingSalaryStreamCreated);

        provider.on(streamPausedFilter, trackingSalaryStreamPaused);

        provider.on(streamResumedFilter, trackingSalaryStreamResumed);

        return () => {
            // Perform cleanup
            provider.off(streamCreatedFilter, trackingSalaryStreamCreated);
            provider.off(streamPausedFilter, trackingSalaryStreamPaused);
            provider.off(streamResumedFilter, trackingSalaryStreamResumed);
        };

    }, [fetchUserSalaryStreams, trackingSalaryStreamCreated, streamCount, trackingSalaryStreamPaused, streamPausedCount, trackingSalaryStreamResumed, streamResumedCount]);

    return data;
}

export default useGetUserSalaryStream