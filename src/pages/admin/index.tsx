import useGetAllUsers from "@/hooks/useGetAllUsers"


const Admin = () => {
    const allUsers = useGetAllUsers();
    return (
        <main className="w-full grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">No. of Users</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">{allUsers?.length}</h1>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">No. of Subscription Plan</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">30,069</h1>
                </div>
            </div>
            <div className="flex flex-col gap-5 bg-gray-800 rounded-lg p-6">
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-gray-300 font-barlow">No. of Subscribers</h4>
                    <h1 className="md:text-4xl text-2xl text-emerald-500 font-belanosima font-medium">5,069</h1>
                </div>
            </div>
        </main>
    )
}

export default Admin