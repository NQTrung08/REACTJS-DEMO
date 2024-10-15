import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../common/BreadCrumb";
import Header from "../layout/Header/Header";
import MainNavigation from "./Navigation/mainNavigation";
import SubNavigation from "./Navigation/subNavigation";

export const PublicLayout = observer(() => {
    return (
        <div className='flex h-full'>
            <MainNavigation />
            <div className='flex flex-col w-full'>
                <Header />
                <BreadCrumb />
                <div className='flex'>
                    <SubNavigation />
                    <Outlet />

                </div>
            </div>

        </div>
    );
})