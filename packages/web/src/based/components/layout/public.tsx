import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import { Header } from "../layout/Header/Header";
import { MainNavigation } from "./Navigation/mainNavigation";

export const PublicLayout = observer(() => {
    return (
        <div className='h-[100vh] w-full flex flex-row overscroll-none overflow-hidden'>
            <MainNavigation />
            <div className='flex flex-col w-full overflow-hidden'>
                <Header />
                {/* <BreadCrumb title='Nhân viên / Danh sách nhân viên' />
                <div className='flex w-full h-full'> */}
                    {/* <SubNavigation /> */}
                    <Outlet />

                {/* </div> */}
            </div>

        </div>
    );
})