import Header from "../layout/Header/Header";
import Footer from "../common/Footer";
import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./Navigation/mainNavigation";
import SubNavigation from "./Navigation/subNavigation";
import BreadCrumb from "../common/BreadCrumb";

export const PublicLayout = observer(() => {
    return (
        // <div className="w-full flex-col">
        //     {/* <PublicHeader /> */}
        //     <div className="h-full w-full">
        //         <MainNavigation />
        //         <Outlet />
        //         {/* <Footer /> */}

        <div className='flex h-screen'>
            <MainNavigation />
            <div className='flex flex-col flex-1'>
                <Header />
                <BreadCrumb />
                <div className='flex h-screen'>
                    <SubNavigation />
                    <Outlet />

                </div>
            </div>

        </div>
        //     </div>
        // </div>
    );
})