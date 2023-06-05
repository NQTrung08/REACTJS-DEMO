import { observer } from 'mobx-react';
import {
    Route, Routes, useLocation
} from "react-router-dom";
import { PublicLayout } from 'web-components';
import { HomeScreen } from './screens/home/home';
import { HomePublicScreen } from './screens/home/home-public';
import { LoginScreen } from './screens/login/login';

export const RouteApp = observer(() => {

    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePublicScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route
                    path="/home"
                    element={
                        <RequireAuth>
                            <HomeScreen />
                        </RequireAuth>
                    }
                />

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

