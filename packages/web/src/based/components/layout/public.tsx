import Header from "../common/HeaderLogin";
import Footer from "../common/Footer";
import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./Navigation/mainNavigation";
import SubNavigation from "./Navigation/subNavigation";

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
      <div className='flex flex-col w-screen'>
        <Header />
        <div className='py-2 px-3 relative bg-[#EEF3FE]'>
          <span className='text-xs font-medium'>Nhân viên / Danh sách nhân viên</span>
        </div>
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