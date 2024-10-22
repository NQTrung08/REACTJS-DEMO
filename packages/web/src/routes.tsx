import { observer } from 'mobx-react';
import {
    Route, Routes, useLocation
} from "react-router-dom";
import { PublicLayout } from './based/components/layout';
import { AccountantRoutes } from './modules/accountant/router';
import { LoginRoutes } from './modules/authenticate/routes';
import { PublicScreen } from './modules/home/public';
import { StaffRoutes } from './modules/staff/routes';


export const RouteApp = observer(() => {

    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<PublicScreen />} />
                <Route path="/login" element={<LoginRoutes />} />
                <Route path="/staff" element={<StaffRoutes />} />
                <Route path="/accountant/*" element={<AccountantRoutes />} />
            </Route>
        </Routes>
    );
})


const RequireAuth = observer(({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    // if (!sessionStore.session) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
})

