import Header from "../common/HeaderLogin";
import Footer from "../common/Footer";
import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
export const PublicLayout = observer(() => {
    return (
        <div className="w-full flex-col">
            {/* <PublicHeader /> */}
            <div className="h-full w-full">
                {/* <Header /> */}
                <Outlet />
                {/* <Footer /> */}
            </div>
        </div>
    );
})