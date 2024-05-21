import { observer } from 'mobx-react';
import {
    Route, Routes
} from "react-router-dom";
import { LoginScreen } from './screens/login';

export const LoginRoutes = observer(() => {

    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
        </Routes>
    );
})
