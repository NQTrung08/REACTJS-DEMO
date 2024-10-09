import { observer } from 'mobx-react';
import {
    Route, Routes
} from "react-router-dom";
import StaffScreen from './screens/staff';

export const StaffRoutes = observer(() => {

    return (
        <Routes>
            <Route path="/" element={<StaffScreen />} />
        </Routes>
    );
})
