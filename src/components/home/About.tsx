import { SiStreamrunners } from "react-icons/si"


const About = () => {
    return (
        <main className='w-full flex flex-col items-start my-24'>
            <div className="w-full grid md:grid-cols-2 gap-20 lg:px-28 px-4">
                <div className="w-full relative before:bg-gradient-to-t before:absolute before:w-full before:h-full before:from-gray-950 before:to-gray-950/50 flex justify-between items-center">
                    <div className="lg:w-[200px] lg:h-[200px] w-[150px] h-[150px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center">
                        <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gray-950"></div>
                    </div>
                    <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center">
                        <div className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full bg-gray-950"></div>
                    </div>
                    <div className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] absolute lg:left-20 left-12 bg-gray-950/20 rounded-full lg:border-[40px] border-[30px] border-sky-400 flex justify-center items-center">
                        <SiStreamrunners className="lg:text-9xl text-7xl text-sky-400" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                    <h1 className="text-3xl text-gray-200 font-belanosima">About StreamFlow</h1>
                    <p className="text-gray-400 font-barlow">At StreamFlow, we're revolutionizing decentralized finance (DeFi) with our innovative token streaming application. Our mission is to empower individuals and businesses to automate financial processes seamlessly, making transactions faster, more efficient, and hassle-free.</p>
                    <h3 className="text-xl text-gray-200 font-belanosima mt-4">Our Vision</h3>
                    <p className="text-gray-400 font-barlow">We envision a future where financial transactions are as fluid as streams, where tokens flow effortlessly to their intended destinations without the need for manual intervention. With StreamFlow, we're turning this vision into reality by providing a secure and user-friendly platform for continuous, real-time token streaming.</p>
                </div>
            </div>
        </main>
    )
}

export default About