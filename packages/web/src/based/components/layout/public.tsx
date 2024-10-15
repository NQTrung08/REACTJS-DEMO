import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import Header from "../layout/Header/Header";
import MainNavigation from "./Navigation/mainNavigation";
import SubNavigation from "./Navigation/subNavigation";

export const PublicLayout = observer(() => {
    return (
        <div className='h-[100vh] w-full flex flex-row overscroll-none overflow-hidden'>
            <MainNavigation />
            <div className='flex flex-col w-full overflow-hidden'>
                <Header />
                <BreadCrumb />
                <div className='flex w-full h-full'>
                    <SubNavigation />
                    <Outlet />

                </div>
            </div>

        </div>
    );
})