import DashboardFooter from "@/components/user/DashboardFooter";
import Header from "@/components/user/Header";
import SideBar from "@/components/user/SideBar";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";


const UserLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const scrollableRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        scrollableRef?.current?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className=" bg-gray-950 font-sansource lg:p-3" >
            {/* Page Wrapper Start  */}
            <div className="flex h-screen gap-3 overflow-hidden">
                {/* Sidebar Start */}
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Sidebar End  */}

                {/* Content Area Start  */}
                <div ref={scrollableRef} className="relative flex min-h-screen flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden">

                    <section>
                        {/*  Header Start */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/*  Header End */}

                        {/*  Main Content Start */}
                        <main>
                            <div className="mx-auto max-w-screen-2xl pt-4 pb-6 md:pt-4 md:pb-10 2xl:p-10">
                                <Outlet />
                            </div>
                        </main>
                    </section>
                    {/*  Main Content End  */}
                    <DashboardFooter />

                </div>
                {/*  Content Area End  */}
            </div>
            {/*  Page Wrapper End  */}
        </div>
    )
}

export default UserLayout