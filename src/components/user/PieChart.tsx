/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from "react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
    chart: {
        type: "pie",
        background: 'transparent',
    },
    stroke: {
        width: 0.5,
    },
    theme: {
        mode: 'dark',
    },
    colors: ['#0284c7', '#059669'],
    labels: ['Salary', 'Subscription'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
    },

    plotOptions: {
        pie: {
            donut: {
                size: '55%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: true,
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },

    ]
}

const PieChart = () => {

    const data = useMemo(() => {
        return {
            series: [5, 8]
        }
    }, [])

    return (
        <div className='w-full flex flex-col gap-3 font-barlow'>
            <h1 className='md:text-xl text-base text-gray-300'>Stream Analysis</h1>
            <ReactApexChart options={options} series={data.series} type="pie" />
        </div>
    )
}

export default PieChart