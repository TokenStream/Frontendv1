import { Button } from "@/components/ui/button"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"


const Disclaimer = () => {
    const navigate = useNavigate()
    return (
        <main className="relative min-h-screen flex flex-col">
            <Button onClick={() => navigate('/')} className="bg-sky-500 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 left-8">
                <IoIosArrowRoundBack className="text-2xl" />
            </Button>

            <section className="w-full flex text-gray-300 flex-col pt-28 lg:px-20 md:px-12 px-4">
                <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl tracking-wider  font-belanosima">Disclaimer</h1>
            </section>
        </main>
    )
}

export default Disclaimer