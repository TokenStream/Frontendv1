import SubscriptionImg from "../../assets/subscribe.png";
import SalaryImg from "../../assets/salary.png";
import StakingImg from "../../assets/staking.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type ServiceTypes = {
    caption: string
    description: string
    url: string
    img: string
}

const Services = () => {
    const services: ServiceTypes[] = [
        {
            caption: 'Subscription Management',
            description: 'StreamFlow offers a robust subscription management service, allowing businesses to automate recurring payments and manage subscription tiers effortlessly.',
            url: '/subscriptions',
            img: SubscriptionImg
        }, {
            caption: 'Staking/Rewards Distribution',
            description: "Reward your users with StreamFlow's dynamic rewards distribution service.Customize performance metrics and automate reward payouts for maximum engagement",
            url: '/stakings',
            img: StakingImg
        }, {
            caption: 'Salary Distributions',
            description: "Simplify salary distributions with StreamFlow's automated service.Calculate pro- rata payments accurately and streamline payroll processes for your employees.",
            url: '/salary',
            img: SalaryImg
        }
    ]
    return (
        <main className='w-full flex flex-col items-center md:my-24 my-20 lg:px-20 md:px-16 px-4'>
            <h1 className="text-4xl text-gray-200 font-belanosima">Our Services</h1>
            <p className="text-gray-400 font-barlow text-center md:w-[50%]">Explore our range of services tailored to meet your financial needs:</p>

            <div className="w-full  grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-12">
                {
                    services.map(({ caption, description, url, img }, index) => (
                        <ServiceCard
                            key={index}
                            caption={caption}
                            description={description}
                            url={url}
                            img={img}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Services

const ServiceCard = ({ caption, description, url, img }: ServiceTypes) => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex flex-col items-start bg-gray-950 ring-1 ring-gray-600 py-7 px-5 rounded-md cursor-pointer transition-all duration-200 hover:ring-emerald-500">
            <div className="w-full flex flex-col items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center rounded-md">
                    <img src={img} alt={caption} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-2xl text-gray-200 text-start font-belanosima mt-5">{caption}</h1>
                <p className="text-gray-400 font-barlow text-sm">{description}</p>
            </div>
            <Button onClick={() => navigate(url)} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 mt-5" type="button">Get Started</Button>
        </div>
    )
}