import coverImg from "../../assets/authImage.webp";

const Signup = () => {
    return (
        <section className="w-full h-screen flex bg-gray-950">
            <main className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2">
                <aside className="lg:col-span-2 hidden overflow-hidden rounded-e-3xl md:flex w-full h-full">
                    <img src={coverImg} alt="image" className="w-full h-full object-cover" />
                </aside>
                <aside className="flex flex-col items-center">

                </aside>
            </main>
        </section>
    )
}

export default Signup